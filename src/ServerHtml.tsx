import { RootState } from './store';
import { PreloadedState } from '@reduxjs/toolkit';

interface HtmlProps {
  preloadedState: PreloadedState<RootState>;
  styles: string | null;
  children: React.ReactNode;
}

const isProduction = process.env.NODE_ENV === 'production';

const ServerHtml: React.FC<HtmlProps> = ({ preloadedState, styles, children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {isProduction ? (
          <link rel="stylesheet" href={styles} />
        ) : (
          <>
            <script
              type="module"
              dangerouslySetInnerHTML={{
                __html: `
            import RefreshRuntime from 'http://localhost:5173/@react-refresh'
            RefreshRuntime.injectIntoGlobalHook(window)
            window.$RefreshReg$ = () => {}
            window.$RefreshSig$ = () => (type) => type
            window.__vite_plugin_react_preamble_installed__ = true
          `,
              }}
            />
            <script type="module" src="http://localhost:5173/@vite/client" />
          </>
        )}

        <title>React.Components</title>
      </head>
      <body>
        <div id="root">{children}</div>
        <div id="portal"></div>
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          `,
          }}
        />
      </body>
    </html>
  );
};

export default ServerHtml;
