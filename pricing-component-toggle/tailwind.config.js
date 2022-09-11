module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'body': "Montserrat, sans-serif",
    },
    extend: {
      colors: {
        grayishBlueLightness:  "hsl(240, 78%, 98%)",
        lightGrayishBlue: "hsl(234, 14%, 74%)",
        grayishBlue: "hsl(233, 13%, 49%)",
        darkGrayishBlue: "hsl(232, 13%, 33%)"
      },
      backgroundImage: {
        gradientForward: 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
        gradientReverse: 'linear-gradient(to left, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
      },
      fontSize: {
        startSize: '15px'
      }
    },
  },
  plugins: [],
}
