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
          // DEFAULT = light mode
          // dark = dark mode

          // Page background
          'bg': {
            DEFAULT: '#e5e5e5',
            dark: '#262626',
          },

          // Panel color
          'panel': {
            DEFAULT: '#ffffff',
            dark: '#404040'
          },

          // Button color
          'primary': {
            DEFAULT: '#1d4ed8',
            hover: '#1e40af',
            dark: '#6d28d9',
            hoverDark: '#5b21b6'
          },

          // Text color
          'txt': {
            DEFAULT: '#000000',
            dark: '#fafafa'
          },

          // Stat colors
          'hp': {
            DEFAULT: '#ef4444',
            dark: '#dc2626',
          },
          'att': {
            DEFAULT: '#f97316',
            dark: '#ea580c',
          },
          'def': {
            DEFAULT: '#eab308',
            dark: '#ca8a04',
          },
          'spa': {
            DEFAULT: '#3b82f6',
            dark: '#2563eb',
          },
          'spd': {
            DEFAULT: '#22c55e',
            dark: '#16a34a',
          },
          'spe': {
            DEFAULT: '#ec4899',
            dark: '#db2777',
          },
          'tot': 
          {
            DEFAULT: 'rgba(0,0,0,0)',
            dark: 'rgba(0,0,0,0)',
          }
        },

        // Fonts
        fontFamily: {
          sans: [
            '"Cabin"',
            'Arial',
            'sans-serif',
          ],
        },
    }
  },
}