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
            DEFAULT: '#eeeeee',
            dark: '#202020',
          },
        },
    }
  },
}