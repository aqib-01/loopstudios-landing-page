module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      alata: ["Alata", "sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
      },
      backgroundImage: {
        "hero-img-mob": "url(/public/images/mobile/image-hero.jpg)",
        "hero-img-desk": "url(/public/images/desktop/image-hero.jpg)",
      },
    },
  },
  plugins: [],
};
