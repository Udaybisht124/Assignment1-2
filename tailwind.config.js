module.exports = {
  darkMode: 'class', // Enable dark mode via class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // This is necessary for Flowbite React
  ],
  theme: {
    extend: {
      colors: {
        brand: '#121827', // Custom color
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // Only the Flowbite plugin is needed here
  ],
};