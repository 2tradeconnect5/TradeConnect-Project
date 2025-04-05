/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'navy': {
            800: '#002366', // Dark blue from your logo
          },
          'blue': {
            600: '#0066CC', // Lighter blue from your logo
          },
          'green': {
            600: '#2E8B57', // Green from your logo
          },
        }
      },
    },
    plugins: [],
  }
  