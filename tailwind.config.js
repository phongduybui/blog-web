module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        'semi-black': '#2d3748',
        secondary: '#718096',
        'semi-gray': '#f8f8f8',
        gray: '#E2E8F1',
        'gray-light': '#a0aec0',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
