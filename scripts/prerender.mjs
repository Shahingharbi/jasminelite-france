import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = resolve(__dirname, '../dist');
const serverDir = resolve(distDir, 'server');

const routes = [
  '/',
  '/services',
  '/about',
  '/blog',
  '/blog/preparer-bien-location-saisonniere',
  '/blog/pourquoi-conciergerie-haut-gamme',
  '/contact',
  '/Mentionslegales',
  '/Politique-confidentialite',
  '/cgv',
  '/cookies',
];

async function prerender() {
  const serverEntry = pathToFileURL(resolve(serverDir, 'entry-server.js')).href;
  const { render } = await import(serverEntry);
  const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');

  let ok = 0;
  let fail = 0;

  for (const route of routes) {
    try {
      const { html, helmet } = render(route);

      // Inject rendered app HTML
      let pageHtml = template.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Inject per-page helmet head tags via the placeholder marker
      if (helmet) {
        const helmetHead = [
          helmet.title?.toString() ?? '',
          helmet.meta?.toString() ?? '',
          helmet.link?.toString() ?? '',
          helmet.script?.toString() ?? '',
        ].join('\n    ');

        pageHtml = pageHtml.replace('<!-- HELMET_TAGS -->', helmetHead);
      } else {
        pageHtml = pageHtml.replace('<!-- HELMET_TAGS -->', '');
      }

      // Compute output path: /blog/article → dist/blog/article/index.html
      let outputPath;
      if (route === '/') {
        outputPath = resolve(distDir, 'index.html');
      } else {
        const dir = resolve(distDir, route.replace(/^\//, ''));
        if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
        outputPath = resolve(dir, 'index.html');
      }

      writeFileSync(outputPath, pageHtml, 'utf-8');
      console.log(`✅  ${route}`);
      ok++;
    } catch (err) {
      console.error(`❌  ${route} — ${err.message}`);
      fail++;
    }
  }

  console.log(`\n🎉  Pre-rendering terminé : ${ok} OK, ${fail} erreurs`);
}

prerender();
