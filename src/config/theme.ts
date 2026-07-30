{
  "name": "pjs-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "14.2.15",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@types/node": "^20.14.10",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.1",
    "eslint-config-next": "14.2.15",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.6.3"
  }
}
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /* ── STATIC EXPORT ──────────────────────────────────────────
     `npm run build` writes a plain folder of HTML/CSS/JS to /out.
     No Node server needed — upload /out to Netlify, Vercel,
     GitHub Pages, or any shared host's public_html. */
  output: 'export',

  /* Required for static export: Next's image optimizer needs a
     server, so images are served as-is. Compress them before
     putting them in /public/images. */
  images: { unoptimized: true },

  /* Emits /o-nama/index.html instead of /o-nama.html — works on
     every static host without rewrite rules. */
  trailingSlash: true,
};

export default nextConfig;
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
{ "extends": ["next/core-web-vitals"] }
node_modules/
.next/
out/
build/
.env*.local
.DS_Store
*.tsbuildinfo
next-env.d.ts
