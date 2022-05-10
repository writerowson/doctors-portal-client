module.exports = {
  content: ["./src/**/*.{html,js}"],
  backgroundImage: {
    'hero-pattern': "https://img.freepik.com/free-photo/dental-concept-healthy-equipment-tools-dental-care-professional-banner_36325-1246.jpg?w=900",
    'footer-texture': "url('/img/footer-texture.png')",
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#19D3AE",
          secondary: "#0FCFEC",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },

    ],
  },


  plugins: [require("daisyui")],
}