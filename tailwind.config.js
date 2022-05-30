module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Greycliff', 'Roboto', 'sans-serif'],
      serif: ['Quincy', 'serif'],
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2B9347',
        },
      },
    },
  },
  plugins: [],
}
