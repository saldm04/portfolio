import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'portfolio';

export default defineConfig({
  base: process.env.GITHUB_REPOSITORY ? `/${repoName}/` : '/',
  plugins: [react()],
});
