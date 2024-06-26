module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: {
          dark: '#121212',
        },
        primary: {
          light: '#ffa600',
          dark: '#483d8b',
        },
        secondary: {
          light: '#007bffcd',
          dark: '#0056B2CD',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
