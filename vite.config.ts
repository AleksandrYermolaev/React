/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import sass from 'sass';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    origin: 'http://127.0.0.1:5173',
    open: true,
  },
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'c8',
      all: true,
      exclude: [
        ...configDefaults.exclude,
        'src/types/types.ts',
        'src/vite-env.d.ts',
        'src/entry-server.tsx',
        'src/entry-client.tsx',
        'src/ServerHtml.tsx',
        'src/Router.tsx',
        'server.ts',
      ],
    },
  },
});
