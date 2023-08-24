/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#36483d',
        'secondary': '#f5b82e',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '3.5xl': ['2rem', '1.2'],
        '4.25xl': ['2.5rem', '1.2'],
        '4.5xl': ['2.875rem', '1.07'],
      },
      maxWidth: {
        'content': 'calc(1124px + 15%)',
      },
      minHeight: {
        '128': '32rem',
        '140': '35rem',
      },
      spacing: {
        '15': '3.75rem',
        '17': '4.25rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '30': '7.5rem',
        'heading': '7.5%',
      },
    },
    screens: {
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ...process.env.NODE_ENV === 'development'
      ? [require('tailwindcss-debug-screens')]
      : [],
  ],
}
