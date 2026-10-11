// Build-time Tailwind (v3.4.17, the version the runtime CDN served). The theme is the
// one that used to live in an inline `tailwind.config` script in index.html.
/** @type {import('tailwindcss').Config} */
export default {
  // Every folder whose source contains class names. The old runtime CDN scanned the
  // live DOM; this scans the source, so any folder that adds markup must be listed.
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './config/**/*.{ts,tsx}',
  ],
  // No utility class is assembled from fragments (checked: no `bg-${x}` style
  // concatenation), so no safelist is needed. If one is ever added, list it here.
  safelist: [],
  theme: {
    extend: {
      colors: {
        amber: {
          400: '#d9a441',
          500: '#b8860b',
          600: '#8f6b00',
        },
      },
    },
  },
};
