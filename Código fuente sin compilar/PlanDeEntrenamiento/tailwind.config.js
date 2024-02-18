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
        section1: {
          dark: '#121212', // Adjusted dark color for section1
        },
        section2: {
          dark: '#483d8b', // Dark Slate Blue for dark mode of section2
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
