module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "ss": "310px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      "sg": "1180px",
      'xl': '1280px',
      "1xl": "1320px",
      '2xl': '1536px',
      '3xl': '8036px',
      'mlg': {'max': '1024px'},
      'm1lg': {'max': '1180px'},
    }
  },
  plugins: [],
}
