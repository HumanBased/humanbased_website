import path from 'path';
import { existsSync } from 'node:fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
        // Team photos are optional: shown on /about only if scripts/team-photos.mjs
        // produced public/images/team/<key>.webp before this build.
        __TEAM_PHOTOS__: JSON.stringify({
          luis: existsSync(path.resolve(__dirname, 'public/images/team/luis.webp')),
          alexina: existsSync(path.resolve(__dirname, 'public/images/team/alexina.webp')),
        }),
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
