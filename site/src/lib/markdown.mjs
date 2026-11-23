import GithubSlugger from 'github-slugger';
import { toString } from 'mdast-util-to-string';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { SKIP, visit } from 'unist-util-visit';

const markdown = unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
  .use(remarkGfm)
  .use(remarkRehype, { clobberPrefix: 'nota-' })
  .use(wrapTables)
  .use(rehypeStringify);

function wrapTables() {
  return (tree) => {
    visit(tree, { type: 'element', tagName: 'table' }, (table, index, parent) => {
      parent.children[index] = {
        type: 'element',
        tagName: 'div',
        properties: {
          className: ['markdown-table'],
          tabIndex: 0,
          role: 'region',
          ariaLabel: 'Tabela do capítulo',
        },
        children: [table],
      };
      return SKIP;
    });
  };
}

function identifyTitle(tree, stem, prefatoryHeading) {
  const candidates = tree.children.filter((node) => node.type === 'heading' && toString(node).trim());
  const first = candidates[0];
  if (!first || toString(first).trim() !== stem) return { titleNode: first, preface: [] };

  const index = candidates.findIndex((node, index) => {
    if (index === 0) return false;
    const text = toString(node).trim();
    return text !== stem && text !== prefatoryHeading && /\p{L}/u.test(text);
  });

  return index > 0
    ? { titleNode: candidates[index], preface: candidates.slice(0, index) }
    : { titleNode: first, preface: [] };
}

export function parseChapter(source, { fallbackTitle, stem, prefatoryHeading }) {
  const tree = markdown.parse(source);
  const { titleNode, preface } = identifyTitle(tree, stem, prefatoryHeading);
  const slugger = new GithubSlugger();
  const headings = [];
  const anchors = new Map();
  let titleHeading = null;
  let previousDepth = 1;

  visit(tree, 'heading', (node) => {
    const text = toString(node).trim();
    const sourceId = slugger.slug(text);
    const id = `sec-${sourceId}`;
    anchors.set(sourceId, id);
    node.data = { ...node.data, hProperties: { id } };
    if (preface.includes(node)) {
      node.data.hName = 'p';
      node.data.hProperties.className = ['markdown-preface'];
      return;
    }

    node.depth = node === titleNode ? 1 : Math.min(Math.max(2, node.depth), previousDepth + 1);
    previousDepth = node.depth;
    const heading = { id, text, depth: node.depth };

    if (node === titleNode) titleHeading = heading;
    else if (text) headings.push(heading);
  });

  return {
    tree,
    anchors,
    headings,
    titleHeading,
    title: titleHeading?.text ?? fallbackTitle,
    titleOrigin: titleHeading ? 'heading' : 'file-name',
    empty: tree.children.every((node) => node.type === 'yaml'),
  };
}

function setLinkDestination(node, destination) {
  if (destination) {
    node.url = destination;
  } else if (node.type === 'image') {
    node.type = 'text';
    node.value = node.alt || '';
  } else {
    node.url = '';
    node.data = {
      ...node.data,
      hName: 'span',
      hProperties: { href: null, title: 'Destino indisponível no acervo' },
    };
  }
}

export function renderChapter(tree, resolve, report) {
  const definitions = new Map();
  visit(tree, 'definition', (node) => {
    if (!definitions.has(node.identifier)) definitions.set(node.identifier, node);
  });

  visit(tree, ['link', 'image', 'linkReference', 'imageReference', 'html'], (node) => {
    if (node.type === 'html') {
      report(node);
      return;
    }

    if (node.type.endsWith('Reference')) {
      const definition = definitions.get(node.identifier);
      if (!definition) return;
      node.type = node.type === 'linkReference' ? 'link' : 'image';
      node.url = definition.url;
      node.title = definition.title;
    }

    setLinkDestination(node, resolve(node));
  });

  return markdown.stringify(markdown.runSync(tree));
}

export function explicitElementReferences(tree, source) {
  let section = '';
  let sectionDepth = 0;
  const references = [];

  for (const node of tree.children) {
    if (node.type === 'heading') {
      const heading = toString(node).trim();
      if (/^Interações no Ecossistema\b/iu.test(heading)) {
        section = heading;
        sectionDepth = node.depth;
      } else if (node.depth <= sectionDepth) {
        section = '';
      }
    }

    if (!section || node.type !== 'list') continue;
    for (const item of node.children) {
      const label = item.children[0]?.children?.[0];
      if (label?.type !== 'strong') continue;
      const text = toString(label).trim();
      if (!text.endsWith(':')) continue;
      const names = text.slice(0, -1).replace(/^Com\s+/iu, '').split(/\s*(?:,|&)\s*|\s+e\s+/iu);
      const { start, end } = item.position;
      references.push({
        names: names.map((name) => name.trim()).filter(Boolean),
        evidence: source.slice(start.offset, end.offset),
        startLine: start.line,
        endLine: end.line,
        section,
      });
    }
  }

  return references;
}
