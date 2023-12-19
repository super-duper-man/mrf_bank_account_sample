/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ...defaultTheme,
      // colors: {
      //   ...defaultTheme.colors,
      //   text: {
      //     DEFAULT: "#1F2937",
      //   },
      // },
    },
  },
  plugins: [],
});
