import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Request, Response } from 'express';
import { store } from 'store';
import { Provider } from 'react-redux';
import ServerHtml from 'ServerHtml';
import Router from 'Router';
import apiSlice from 'services/apiService';

export async function render(
  request: Request,
  response: Response,
  script: string,
  styles: string | null
) {
  await Promise.all(store.dispatch(apiSlice.util.getRunningQueriesThunk()));
  const preloadedState = store.getState();

  const { pipe } = renderToPipeableStream(
    <ServerHtml preloadedState={preloadedState} styles={styles}>
      <StaticRouter location={request.originalUrl}>
        <Provider store={store}>
          <Router />
        </Provider>
      </StaticRouter>
    </ServerHtml>,
    {
      bootstrapModules: [script],
      onShellReady() {
        response.setHeader('content-type', 'text/html');
        pipe(response);
      },
    }
  );
}
