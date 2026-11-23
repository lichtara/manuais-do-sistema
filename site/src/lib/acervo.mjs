import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, realpathSync, statSync, writeFileSync } from 'node:fs';
import { join, posix, relative, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { explicitElementReferences, parseChapter, renderChapter } from './markdown.mjs';

export const repositoryRoot = execFileSync('git', ['rev-parse', '--show-toplevel'], {
  encoding: 'utf8',
}).replace(/\r?\n$/u, '');

const repository = 'lichtara/sistema-lichtara';
const sourceBranch = 'main';
const github = `https://github.com/${repository}`;
const rawGitHub = `https://raw.githubusercontent.com/${repository}/${sourceBranch}`;
const elementDirectory = '04_campo_operacional/elementos-do-sistema';
const prefatoryHeadings = {
  '02_campo_estrutural/introducao-a-bio-ressonância-harmonica': 'Manual de Introdução a Bio-Ressonância Harmônica',
};
const collator = new Intl.Collator('pt-BR', { numeric: true, sensitivity: 'base' });
const fieldLabels = {
  '01_nucleo': 'Núcleo',
  '02_campo_estrutural': 'Campo Estrutural',
  '03_campo_luminico': 'Campo Lumínico',
  '04_campo_operacional': 'Campo Operacional',
  '06_campo_expressao': 'Campo Expressão',
  '07_campo_comunidade': 'Campo Comunidade',
  '08_campo_sintese': 'Campo Síntese',
};
const manualLabels = {
  'construcao-de-marcas-conscientes.md': 'Construção de marcas conscientes',
  'elementos-do-sistema': 'Elementos do sistema',
  'fundamentos-da-arquitetura-vibracional': 'Fundamentos da arquitetura vibracional',
  'guias-sistema-flux ': 'Guias do sistema Flux',
  'introducao-a-bio-ressonância-harmonica': 'Introdução à bio-ressonância harmônica',
  'introducao-a-nova-tecnologia': 'Introdução à nova tecnologia',
  'manual-canalizacao-tecnica': 'Manual de canalização técnica',
  'manual-comunicacao-interdimensional': 'Manual de comunicação interdimensional',
  'manual-de-co-criacao': 'Manual de co-criação',
  'manual-de-governanca-viva': 'Manual de governança viva',
  'manual-de-sintonizacao-e-ativaca': 'Manual de sintonização e ativação',
  'manual-de-testes-e-implementacao': 'Manual de testes e implementação',
  'manual-do-ecossistema-vibracional': 'Manual do ecossistema vibracional',
  'manual-do-objetivo-do-projeto': 'Manual do objetivo do projeto',
  'manual-geral-sistema': 'Manual geral do sistema',
  'manual-plataforma-lumora': 'Manual da plataforma Lumora',
  'manual-sistema-lumora': 'Manual do sistema Lumora',
  'manual-tecnico-sistema-flux': 'Manual técnico do sistema Flux',
  'manual-treinamento-tecnico': 'Manual de treinamento técnico',
  'sistema-flux': 'Sistema Flux',
};

function compare(a, b) {
  return collator.compare(a, b) || (a < b ? -1 : Number(a > b));
}

function hash(value) {
  return createHash('sha256').update(value).digest('hex');
}

function identity(type, sourcePath, label) {
  const digest = hash(`${type}\0${sourcePath}`);
  const readable = label.normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/gu, '-')
    .replace(/^-|-$/gu, '')
    .slice(0, 64)
    .replace(/-$/u, '');
  return {
    id: `${type}-${digest.slice(0, 24)}`,
    slug: `${readable || type}-${digest.slice(0, 16)}`,
  };
}

function labelFromName(name) {
  const label = name.replace(/\.(?:md|pdf)$/iu, '').replace(/[-_]+/gu, ' ').trim();
  return label.charAt(0).toLocaleUpperCase('pt-BR') + label.slice(1);
}

function encodePath(sourcePath) {
  return sourcePath.split('/').map(encodeURIComponent).join('/');
}

function sourceUrl(sourcePath, kind = 'blob') {
  return `${github}/${kind}/${sourceBranch}/${encodePath(sourcePath)}`;
}

function citationUrl(document, start, end = start) {
  return `${document.sourceUrl}#L${start}${end === start ? '' : `-L${end}`}`;
}

function sourceFiles() {
  const files = execFileSync('git', ['ls-files', '-z', '--cached', '--others', '--exclude-standard'], {
    cwd: repositoryRoot,
    encoding: 'utf8',
  }).split('\0').filter(Boolean);

  // Git supplies the exact Unicode spelling even when the filesystem decomposes names.
  return [...new Set(files)].sort(compare);
}

function regularSourceFile(sourcePath) {
  try {
    const expected = join(repositoryRoot, sourcePath);
    const resolved = realpathSync(expected);
    const relativePath = relative(repositoryRoot, resolved);
    return relativePath !== '..' && !relativePath.startsWith(`..${sep}`) && statSync(resolved).isFile();
  } catch (error) {
    if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return false;
    throw error;
  }
}

function groupDocuments(paths) {
  const fields = new Map();
  const pdfs = [];

  for (const sourcePath of paths) {
    const parts = sourcePath.split('/');
    const fieldPath = parts[0];

    if (fieldPath === 'PDF' && /\.pdf$/iu.test(sourcePath) && regularSourceFile(sourcePath)) {
      const title = labelFromName(parts.at(-1));
      pdfs.push({
        ...identity('pdf', sourcePath, parts.at(-1)),
        order: pdfs.length + 1,
        title,
        titleOrigin: 'file-name',
        sourcePath,
        sourceUrl: sourceUrl(sourcePath),
        route: `/originais/${encodePath(parts.slice(1).join('/'))}`,
        format: 'pdf',
        relations: [],
      });
    }

    if (!/^\d{2}_.+/u.test(fieldPath) || parts.length < 2 || !/\.md$/iu.test(sourcePath)) continue;
    if (!regularSourceFile(sourcePath)) continue;
    if (!fields.has(fieldPath)) fields.set(fieldPath, new Map());
    const manuals = fields.get(fieldPath);
    const manualPath = parts.length > 2 ? `${fieldPath}/${parts[1]}` : fieldPath;
    if (!manuals.has(manualPath)) manuals.set(manualPath, []);
    manuals.get(manualPath).push(sourcePath);
  }

  return { fieldGroups: fields, pdfs };
}

function addChapter(sourcePath, field, manual, order, parsedDocuments, issues) {
  const name = posix.basename(sourcePath);
  const stem = name.replace(/\.md$/iu, '');
  const source = readFileSync(join(repositoryRoot, sourcePath), 'utf8');
  const parsed = parseChapter(source, {
    fallbackTitle: labelFromName(name),
    stem,
    prefatoryHeading: prefatoryHeadings[manual.sourcePath],
  });
  const ids = identity('capitulo', sourcePath, stem);
  const chapter = {
    ...ids,
    title: parsed.title,
    titleOrigin: parsed.titleOrigin,
    titleHeading: parsed.titleHeading,
    sourcePath,
    sourceUrl: sourceUrl(sourcePath),
    route: `${manual.route}${ids.slug}/`,
    fieldId: field.id,
    manualId: manual.id,
    order,
    format: 'markdown',
    empty: parsed.empty,
    headings: parsed.headings,
    relations: [],
  };

  if (parsed.empty) issues.emptyChapters.push(sourcePath);
  parsedDocuments.set(chapter.id, { ...parsed, source });
  return chapter;
}

function createHierarchy(fieldGroups, parsedDocuments, issues) {
  return [...fieldGroups].map(([sourcePath, manualGroups]) => {
    const number = sourcePath.slice(0, 2);
    const ids = identity('campo', sourcePath, sourcePath);
    const field = {
      ...ids,
      number,
      title: fieldLabels[sourcePath] ?? labelFromName(sourcePath.slice(3)),
      sourcePath,
      sourceUrl: sourceUrl(sourcePath, 'tree'),
      route: `/campos/${ids.slug}/`,
      order: Number(number),
      manuals: [],
    };

    const groups = [...manualGroups].sort(([first], [second]) => compare(first, second));
    field.manuals = groups.map(([manualPath, sourcePaths], index) => {
      const kind = manualPath === sourcePath ? 'standalone' : 'directory';
      const name = posix.basename(manualPath);
      const title = kind === 'standalone' ? 'Documentos avulsos' : (manualLabels[name] ?? labelFromName(name));
      const ids = identity('manual', manualPath, kind === 'standalone' ? 'documentos-avulsos' : name.replace(/\.md$/iu, ''));
      const manual = {
        ...ids,
        title,
        sourcePath: manualPath,
        sourceUrl: sourceUrl(manualPath, 'tree'),
        route: `${field.route}${ids.slug}/`,
        order: index + 1,
        kind,
        fieldId: field.id,
        chapters: [],
      };

      manual.chapters = sourcePaths.sort(compare)
        .map((chapterPath, chapterIndex) => addChapter(chapterPath, field, manual, chapterIndex + 1, parsedDocuments, issues));

      manual.chapters.forEach((chapter, chapterIndex) => {
        chapter.previous = navigationLink(manual.chapters[chapterIndex - 1]);
        chapter.next = navigationLink(manual.chapters[chapterIndex + 1]);
      });
      return manual;
    });

    return field;
  });
}

function navigationLink(chapter) {
  return chapter ? { title: chapter.title, route: chapter.route } : null;
}

function pathLookup(paths) {
  const exact = new Set(paths);
  const canonical = new Map();

  for (const sourcePath of exact) {
    const key = sourcePath.normalize('NFC');
    canonical.set(key, canonical.has(key) ? null : sourcePath);
  }
  return (sourcePath) => exact.has(sourcePath) ? sourcePath : canonical.get(sourcePath.normalize('NFC'));
}

function parseDestination(value) {
  if (/[\\\u0000-\u001f\u007f]/u.test(value)) return null;
  if (/^(?:https?:\/\/|\/\/)/iu.test(value)) {
    const url = new URL(value.startsWith('//') ? `https:${value}` : value);
    const sameBranch = ['blob', 'tree'].map((kind) => `/${repository}/${kind}/${sourceBranch}/`)
      .find((prefix) => url.origin === 'https://github.com' && url.pathname.startsWith(prefix));
    if (!sameBranch || /^#L\d/u.test(url.hash)) return { external: url.href };
    return { path: `/${url.pathname.slice(sameBranch.length)}`, query: url.search, fragment: url.hash.slice(1) };
  }

  if (/^(?:mailto|tel):/iu.test(value)) return { external: value };
  if (/^[a-z][a-z\d+.-]*:/iu.test(value)) return null;
  const [, path, query = '', fragment = ''] = /^([^?#]*)(\?[^#]*)?(?:#(.*))?$/u.exec(value) ?? [];
  return path === undefined ? null : { path, query, fragment };
}

function resolveDestination(value, chapter, image, lookup, byPath, parsedDocuments) {
  const destination = parseDestination(value);
  if (!destination) return null;
  if (destination.external) return { href: destination.external };

  const decodedPath = decodeURIComponent(destination.path);
  const candidate = !decodedPath ? chapter.sourcePath : posix.normalize(
    decodedPath.startsWith('/') ? decodedPath.slice(1) : posix.join(posix.dirname(chapter.sourcePath), decodedPath),
  );
  const matchedPath = lookup(candidate);
  if (!matchedPath || !regularSourceFile(matchedPath)) return null;

  const target = byPath.get(matchedPath);
  const fragment = decodeURIComponent(destination.fragment);
  if (image) {
    return { href: `${rawGitHub}/${encodePath(matchedPath)}${destination.query}` };
  }
  if (!target) {
    const hash = fragment ? `#${encodeURIComponent(fragment)}` : '';
    return { href: `${sourceUrl(matchedPath)}${destination.query}${hash}` };
  }

  const headings = parsedDocuments.get(target.id)?.anchors;
  const anchor = headings && fragment ? headings.get(fragment) : fragment;
  if (fragment && !anchor) return null;
  const hash = anchor ? `#${encodeURIComponent(anchor)}` : '';
  const route = target === chapter && hash && !destination.query ? '' : target.route;
  return { href: `${route}${destination.query}${hash}`, target };
}

function resolveChapterLinks(chapter, parsed, lookup, byPath, parsedDocuments, issues) {
  return renderChapter(parsed.tree, (node) => {
    const { start, end } = node.position;
    let resolved;

    try {
      resolved = resolveDestination(node.url, chapter, node.type === 'image', lookup, byPath, parsedDocuments);
    } catch (error) {
      if (!(error instanceof URIError) && error.code !== 'ERR_INVALID_URL') throw error;
    }
    if (!resolved) {
      issues.unresolvedLinks.push({ sourcePath: chapter.sourcePath, line: start.line, url: node.url });
      return '';
    }

    if (resolved.target && resolved.target !== chapter) {
      chapter.relations.push({
        type: 'markdown-link',
        label: resolved.target.title,
        targetId: resolved.target.id,
        targetRoute: resolved.href,
        citationUrl: citationUrl(chapter, start.line, end.line),
        evidence: parsed.source.slice(start.offset, end.offset),
        section: null,
      });
    }
    return resolved.href;
  }, (node) => issues.omittedHtml.push({ sourcePath: chapter.sourcePath, line: node.position.start.line }));
}

function relateElements(elements, parsedDocuments) {
  const names = new Map();
  for (const element of elements) {
    const name = element.title.split(':', 1)[0].trim();
    const key = name.toLocaleLowerCase('pt-BR');
    element.elementName = name;
    names.set(key, names.has(key) ? null : element);
  }

  for (const element of elements) {
    const { tree, source } = parsedDocuments.get(element.id);
    for (const entry of explicitElementReferences(tree, source)) {
      for (const name of entry.names) {
        const target = names.get(name.toLocaleLowerCase('pt-BR'));
        if (!target || target === element) continue;
        element.relations.push({
          type: 'explicit-element-reference',
          label: target.elementName,
          targetId: target.id,
          targetRoute: target.route,
          citationUrl: citationUrl(element, entry.startLine, entry.endLine),
          evidence: entry.evidence,
          section: entry.section,
        });
      }
    }
  }
}

function findDuplicates(chapters) {
  const groups = new Map();
  for (const chapter of chapters) {
    const bytes = readFileSync(join(repositoryRoot, chapter.sourcePath));
    const digest = hash(bytes);
    if (!groups.has(digest)) groups.set(digest, []);
    groups.get(digest).push(chapter.sourcePath);
  }
  return [...groups.values()].filter((paths) => paths.length > 1);
}

function assertUnique(entries) {
  for (const property of ['id', 'route']) {
    const seen = new Set();
    for (const entry of entries) {
      const value = entry[property];
      if (seen.has(value)) throw new Error(`Colisão de ${property} em ${entry.sourcePath}: ${value}`);
      seen.add(value);
    }
  }
}

let cachedAcervo;

export function loadAcervo() {
  if (cachedAcervo) return cachedAcervo;
  const paths = sourceFiles();
  const parsedDocuments = new Map();
  const issues = { emptyChapters: [], duplicates: [], unresolvedLinks: [], omittedHtml: [] };
  const { fieldGroups, pdfs } = groupDocuments(paths);
  const fields = createHierarchy(fieldGroups, parsedDocuments, issues);
  const manuals = fields.flatMap((field) => field.manuals);
  const chapters = manuals.flatMap((manual) => manual.chapters);
  const elements = chapters.filter((chapter) => posix.dirname(chapter.sourcePath) === elementDirectory);
  const byPath = new Map([...chapters, ...pdfs].map((entry) => [entry.sourcePath, entry]));
  const lookup = pathLookup(paths);
  assertUnique([...fields, ...manuals, ...chapters, ...pdfs]);
  relateElements(elements, parsedDocuments);

  for (const chapter of chapters) {
    const parsed = parsedDocuments.get(chapter.id);
    chapter.html = resolveChapterLinks(chapter, parsed, lookup, byPath, parsedDocuments, issues);
  }

  issues.duplicates = findDuplicates(chapters);
  cachedAcervo = { fields, manuals, chapters, pdfs, elements, issues };
  return cachedAcervo;
}

export function writeCatalog() {
  const { fields, manuals, chapters, pdfs, elements, issues } = loadAcervo();
  const catalog = {
    schemaVersion: 1,
    source: { repository: github, ref: sourceBranch },
    fields: fields.map(({ manuals, ...field }) => ({ ...field, manualIds: manuals.map((manual) => manual.id) })),
    manuals: manuals.map(({ chapters, ...manual }) => ({ ...manual, chapterIds: chapters.map((chapter) => chapter.id) })),
    chapters: chapters.map(({ titleHeading, headings, previous, next, html, ...entry }) => entry),
    pdfs,
    elementIds: elements.map((element) => element.id),
    issues,
  };
  const path = join(repositoryRoot, 'site', 'catalogo.json');
  writeFileSync(path, `${JSON.stringify(catalog, null, 2)}\n`);
  return { path, fields: fields.length, manuals: manuals.length, chapters: chapters.length, pdfs: pdfs.length };
}

if (process.argv[2] === '--write' && process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { path, fields, manuals, chapters, pdfs } = writeCatalog();
  console.log(`Catálogo gerado em ${path} com ${fields} campos, ${manuals} manuais, ${chapters} capítulos e ${pdfs} PDFs.`);
}
