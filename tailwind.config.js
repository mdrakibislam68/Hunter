/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './html/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    screens:{
      xsm: '380px',
      xm: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1220px',
    },
    container: {
      center: true,
      padding: {
        xsm: '1rem',
      xm: '1rem',
      sm: '1rem',
      md: '2rem',
      lg: '2rem',
      xl: '2rem',
      '2xl': '2rem',  
      },
    
    },
    extend: {
    },
    colors: {
      transparent: 'transparent',
      'white': '#fff',
      'white-300': '#ffffff4d',
      'light-green': '#10B981',
      'deep-blue': '#1B1C57',
      'dark-blue': '#0E1735',
      'deep-pink': '#EF4444',
      'deep-gray': '#68799F',
      'olive': '#D1FAE5',
      'green': '#047857',
      'white-300': '#ffffff4d',
      'gray': '#888B97',
      'light-gray': '#E0E3EB',
      'gray-300': '#888B97',
      'gray-500': '#3C4563',
      'light-blue': '#96CAE1',
    },
  },
  plugins: [],
}
