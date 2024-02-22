module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class', // Use 'class' to control dark mode with a class on the HTML element
  theme: {
    extend: {
      colors: {
        text: {
          light: '#000000', // Black for light mode text
          dark: '#ffffff', // White for dark mode text
        },
        main: {
          dark: '#121212', // Adjusted dark color for main
        },
        primary: {
          light: '#ffa600',
          dark: '#483d8b',
        },
        secondary: {
          light: '#007bffcd',
          dark: '#ff7d00', // Adjusted secondary color for dark mode
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
