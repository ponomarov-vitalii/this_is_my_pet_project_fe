import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
 
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: 'jsdom',    
    include: ['**/*.test.{ts,tsx}'], 
    exclude: ['e2e/**', 'node_modules/**'], 
    coverage: {
      reporter: ['text', 'lcov'],
      reportOnFailure: true
    },
  },
});