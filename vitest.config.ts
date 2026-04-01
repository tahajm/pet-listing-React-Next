import react from '@vitejs/plugin-react';
import type { ViteUserConfig } from 'vitest/config';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: true,
    watch: false,
    include: ['**/*.test.ts', '**/*.test.tsx'],
    exclude: ['node_modules/**/*'],
    setupFiles: 'vitest-setup.ts',
  },
} as ViteUserConfig);
