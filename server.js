import fs from 'node:fs/promises';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';
const dirname = path.dirname(fileURLToPath(import.meta.url));

// Cached production assets
const templateHtml = isProduction ? await fs.readFile('./dist/client/index.html', 'utf-8') : '';
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/ssr-manifest.json', 'utf-8')
  : undefined;
const resolve = (p) => path.resolve(dirname, p);
// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;
  app.use(compression());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');
    let render;
    if (!isProduction) {
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      render(req, res, '/src/entry-client.tsx', null);
    } else {
      render = (await import('./dist/server/entry-server.js')).render;
      const files = await fs.readdir(resolve('dist/client/assets'));
      const style = './assets/' + files.filter((fn) => fn.includes('css'))[0];
      const script = './assets/' + files.filter((fn) => fn.includes('js'))[0];
      const template = await fs.readFile('./dist/client/' + script, 'utf-8');
      const resultScript = template
        .replace('{createSlice:wk}=void 0', '{createSlice:wk}=gk')
        .replace('{createSlice:Pk}=void 0', '{createSlice:Pk}=gk');
      await fs.writeFile('./dist/client/' + script, resultScript, 'utf-8');
      render(req, res, script, style, url, ssrManifest);
    }
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
