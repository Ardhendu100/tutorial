module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_4c: "#ffffff4c", A700_1e: "#ffffff1e", A700: "#ffffff" },
        gray: {
          50: "#f7fdf9",
          100: "#f2f2f2",
          300: "#e0e0e0",
          600: "#747474",
          700: "#5c5c5c",
          900: "#141414",
          "50_01": "#f8f8f8",
          "900_01": "#1e1e1e",
        },
        blue_gray: { 100: "#d9d9d9", "700_66": "#53535366" },
        green: { 100: "#cff4d9", A700_63: "#0fc74363", A700: "#0fc743" },
        black: { "900_05": "#00000005" },
      },
      fontFamily: {
        pangeaafrikantrial: "Pangea Afrikan Trial",
        inter: "Inter",
      },
      boxShadow: { bs: "0px 2.4px  8px 0px #00000005" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
