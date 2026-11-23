import { copyFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadAcervo } from '../src/lib/acervo.mjs';

const repository = fileURLToPath(new URL('../../', import.meta.url));
const publicDir = fileURLToPath(new URL('../.public-gerado/', import.meta.url));

export async function prepareAssets() {
  const originals = join(publicDir, 'originais');
  const identity = join(publicDir, 'identidade');
  await rm(originals, { recursive: true, force: true });
  await Promise.all([
    mkdir(originals, { recursive: true }),
    mkdir(identity, { recursive: true }),
  ]);

  const { pdfs } = loadAcervo();
  await Promise.all([
    ...pdfs.map(async pdf => {
      const destination = join(publicDir, decodeURIComponent(pdf.route.slice(1)));
      await mkdir(dirname(destination), { recursive: true });
      await copyFile(join(repository, pdf.sourcePath), destination);
    }),
    copyFile(
      join(repository, 'docs/identidade-visual/SVG/Vetor/PRINCIPAL.svg'),
      join(identity, 'matriz.svg'),
    ),
    copyFile(
      join(repository, 'docs/identidade-visual/PNG/Vetor/matriz.svg'),
      join(identity, 'geometria.svg'),
    ),
  ]);
}
