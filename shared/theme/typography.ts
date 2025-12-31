const fontFamily = {
  regular: "Roboto",
  medium: "Roboto-Medium",
  semibold: "Roboto-Medium",
  bold: "Roboto-Bold",
};

export const typography = {
  header: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    lineHeight: 24 * 1.3,
    fontWeight: "700" as const,
  },

  body: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    lineHeight: 11 * 1.5,
    fontWeight: "400" as const,
  },

  splash: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 32 * 1.3,
    fontWeight: "700" as const,
  },

  button: {
    fontFamily: fontFamily.bold,
    fontSize: 64,
    lineHeight: 64 * 1.3,
    fontWeight: "700" as const,
  },

  headerMedium: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    lineHeight: 20 * 1.3,
    fontWeight: "700" as const,
  },

  headerSmall: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    lineHeight: 16 * 1.3,
    fontWeight: "700" as const,
  },

  bodyMedium: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 13 * 1.5,
    fontWeight: "400" as const,
  },

  bodyLarge: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 14 * 1.5,
    fontWeight: "400" as const,
  },

  caption: {
    fontFamily: fontFamily.regular,
    fontSize: 10,
    lineHeight: 10 * 1.5,
    fontWeight: "400" as const,
  },

  currency: {
    large: {
      fontFamily: fontFamily.bold,
      fontSize: 32,
      lineHeight: 32 * 1.2,
      fontWeight: "700" as const,
    },
    medium: {
      fontFamily: fontFamily.bold,
      fontSize: 24,
      lineHeight: 24 * 1.3,
      fontWeight: "700" as const,
    },
    small: {
      fontFamily: fontFamily.medium,
      fontSize: 16,
      lineHeight: 16 * 1.3,
      fontWeight: "500" as const,
    },
  },
} as const;
