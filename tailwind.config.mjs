import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'reading': '65ch',
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: '1.7',
            fontSize: '1.125rem',
          },
        },
      },
    },
  },
  plugins: [typography],
}