const { colors } = require("./shared/theme/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
    "./shared/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        neutral: colors.neutral,
        white: colors.white,
        success: colors.success.main,
        error: colors.error.main,
        warning: colors.warning.main,
        info: colors.info.main,
      },
      fontFamily: {
        sans: ["Roboto"],
        regular: ["Roboto"],
        medium: ["Roboto-Medium"],
        semibold: ["Roboto-Medium"],
        bold: ["Roboto-Bold"],
      },
      fontSize: {
        header: ["24px", { lineHeight: "130%", fontWeight: "700" }],
        body: ["11px", { lineHeight: "150%", fontWeight: "400" }],
        splash: ["32px", { lineHeight: "130%", fontWeight: "700" }],
        btn: ["16px", { lineHeight: "130%", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};
