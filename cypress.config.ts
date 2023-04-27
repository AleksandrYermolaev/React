import { defineConfig } from 'cypress';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
