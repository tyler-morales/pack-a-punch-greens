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
      // Colors
      colors: {
        brand: {
          DEFAULT: '#2B9347',
        },
      },
      // Grid template rows
      gridTemplateRows: {
        vision_xs: 'min-content 125px min-content',
        vision: 'min-content 150px min-content',
        product_card: 'min-content min-content 125px min-content',
      },
      // Grid template columns
      gridTemplateColumns: {
        cart_card: 'min-content,200px,min-content,min-content,min-content',
      },
    },
  },
  plugins: [],
}
