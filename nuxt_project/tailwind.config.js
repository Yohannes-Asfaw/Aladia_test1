// tailwind.config.js
module.exports = {
  darkMode: 'class',  
  content: [
    './pages/**/*.{vue,js}',  
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#333',
      },
    },
  },
  plugins: [],
};
