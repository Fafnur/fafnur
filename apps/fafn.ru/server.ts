import 'zone.js/node';

// import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  server.use(cookieParser());
  const locales = ['ru', 'en'];
  const defaultLocale = 'ru';

  const distFolder = join(process.cwd(), `dist/apps/fafn.ru/browser`);
  // const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({ bootstrap }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Serve static files from /browser

  server.get('/', (req, res) => res.redirect(`/${defaultLocale}/`));

  locales.forEach((locale) => {
    server.get(
      `/${locale}/*.*`,
      express.static(join(distFolder, locale), {
        maxAge: '1y',
      }),
    );

    server.get(`/${locale}$`, (req, res) => res.redirect(`/${defaultLocale}/`));

    // All regular routes use the Universal engine
    server.get(`/${locale}/*`, (req, res) => {
      let prerender = join(distFolder, req.path, 'index.html');

      if (existsSync(prerender)) {
        const { themePreference } = req.cookies;

        if (typeof themePreference === 'string' && themePreference === 'light') {
          prerender = prerender.replace(`browser/${locale}`, `browser/${locale}/light`);
        }
        res.sendFile(prerender);
      } else {
        // Disable SSR, because we use prerender for all pages
        // res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });

        res.statusCode = 404;
        res.sendFile(join(distFolder, locale, '/not-found', 'index.html'));
      }
    });
  });

  server.get(`*`, (req, res) => {
    res.statusCode = 404;
    res.sendFile(join(distFolder, 'ru', '/not-found', 'index.html'));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4002;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export default bootstrap;
