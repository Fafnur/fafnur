import 'zone.js/node';

// import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(locale: string): express.Express {
  const server = express();
  server.use(cookieParser());

  const distFolder = join(process.cwd(), `dist/apps/fafn.ru/browser/${locale}`);
  // const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({ bootstrap }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(join(distFolder, 'ru'), {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    let prerender = join(distFolder, req.path.slice(3), 'index.html');

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
      res.sendFile(join(distFolder, '/not-found', 'index.html'));
    }
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4002;
  const locale = process.env['LOCALE'] || 'ru';

  // Start up the Node server
  const server = app(locale);
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
