/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // This links the CSS variable from layout.tsx to Tailwind
        sans: ['var(--font-montserrat)', 'ui-sans-serif', 'system-ui'],
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        lime: {
          50: '#4e8d58',
          100: '#4e8d58',
          300: '#4e8d58',
          400: '#4e8d58',
          500: '#4e8d58',
          600: '#4e8d58',
          700: '#4e8d58',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}