import App from 'App';
import { renderToPipeableStream } from 'react-dom/server';
import { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom/server';

export const render = (request: Request, response: Response) => {
  const { pipe } = renderToPipeableStream(
    <StaticRouter location={request.originalUrl}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: ['/src/index.tsx'],
      onShellReady() {
        response.setHeader('content-type', 'text/html');
        pipe(response);
      },
    }
  );
};
