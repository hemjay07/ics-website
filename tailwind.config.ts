// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1512px',
      },
      colors: {
        'ics-blue': '#1A2E6E',
        'ics-orange': '#F4854A',
      },
      container: {
        center: true,
        padding: {
          // DEFAULT: '1rem', // Add some default padding
        },
      },
    },
  },
  plugins: [],
}