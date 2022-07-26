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
          'bg': {
            DEFAULT: '#e5e5e5',
            dark: '#121212',
          },
          'panel': {
            DEFAULT: '#ffffff',
            dark: '#262626'
          },
          'primary': {
            DEFAULT: '#6D28D9',
            hover: '#4C1D95'
          },
        },
    }
  },
}