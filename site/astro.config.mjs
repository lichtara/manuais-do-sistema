import { defineConfig } from 'astro/config';
import { prepareAssets } from './scripts/preparar.mjs';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  publicDir: './.public-gerado',
  server: { host: '127.0.0.1' },
  integrations: [{
    name: 'originais-lichtara',
    hooks: {
      'astro:config:setup': async ({ command }) => {
        if (command === 'dev' || command === 'build') await prepareAssets();
      },
    },
  }],
});
