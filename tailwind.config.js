/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': {'max': '590px', 'min': '320px'},
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': {'max': '1224px', 'min': '1000px'},
      // => @media (min-width: 1024px) { ... }

      'desktop': {'max': '1524px', 'min': '1280px'},
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'snaits': {
        100: '#e2e3e8',
        200: '#cbcbdc',
        300: '#b7b8c9',
        400: '#a1a2b5',
        500: '#8a8b9d',
        600: '#71727b',
        700: '#5c5d6e',
        800: '#4a4b5c',
        900: '#383946',

      },
      'snaitsBg': {
        100: '#fcfcfc',
        200: '#fafafa',
        300: '#f5f5f5',
        400: '#f0f0f0',
        500: '#e6e6e6',
        600: '#d9d9d9',
        700: '#cccccc',
        800: '#bfbfbf',
        900: '#b3b3b3',
      },
      // ...
    },
  },
  plugins: [],
}