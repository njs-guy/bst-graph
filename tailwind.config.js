module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
        colors:
        {
          // Page background
          'bg': {
            DEFAULT: '#e5e5e5',
            dark: '#121212',
          },

          // Panel color
          'panel': {
            DEFAULT: '#ffffff',
            dark: '#262626'
          },

          // Button color
          'primary': {
            DEFAULT: '#6D28D9',
            hover: '#4C1D95'
          },

          // Text color
          'txt': {
            DEFAULT: '#000000',
            dark: '#ffffff'
          },
        },
    }
  },
}