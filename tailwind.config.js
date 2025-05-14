/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0056b3',
          dark: '#004390',
          light: '#1a75d2',
        },
        secondary: '#00a0e9',
        accent: '#ff6b00',
      },
    },
  },
  plugins: [],
}