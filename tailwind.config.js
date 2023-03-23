/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      blue: {
        100: "hsl(227, 12%, 61%)",
        200: "hsl(228, 39%, 23%)",
        300: "hsl(233, 12%, 13%)",
      },
      red: {
        100: "hsl(12, 88%, 59%)",
        200: "hsl(13, 100%, 96%)",
        300: "hsl(233, 12%, 13%)",
      },
      grey: {
        100: "hsl(0, 0%, 98%)",
      },
      transparent: "transparent",
    },
    fontFamily: {
      sans: ['"Be Vietnam Pro"'],
    },
    extend: {},
  },
  plugins: [],
};
