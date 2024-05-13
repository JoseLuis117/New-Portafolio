import {nextui} from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        // ...
        colors: {
          principal: '#1BCBC3'
        },
      },
      dark: {
        // ...
        colors: {
          principal:'#ddb569'
        },
      },
      // ... custom themes
      
    },

  })],
};
