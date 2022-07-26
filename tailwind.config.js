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
            DEFAULT: '#6d28d9',
            hover: '#4c1d95'
          },

          // Text color
          'txt': {
            DEFAULT: '#000000',
            dark: '#ffffff'
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
    }
  },
}