export const colors = {
  primary: {
    50: "#E6F9F4",
    100: "#CCF3E9",
    200: "#99E7D3",
    300: "#66DBBD",
    400: "#33CFA7",
    500: "#1DAB87",
    600: "#17896C",
    700: "#116751",
    800: "#0C4436",
    900: "#06221B",
  },

  secondary: {
    50: "#E8EBF3",
    100: "#D1D7E7",
    200: "#A3AFCF",
    300: "#7587B7",
    400: "#475F9F",
    500: "#1D3A70",
    600: "#172E5A",
    700: "#112343",
    800: "#0C172D",
    900: "#060C16",
  },

  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },

  white: "#FFFFFF",

  success: {
    light: "#34D399",
    main: "#1DAB87",
    dark: "#059669",
  },

  error: {
    light: "#F87171",
    main: "#EF4444",
    dark: "#DC2626",
  },

  warning: {
    light: "#FBBF24",
    main: "#F59E0B",
    dark: "#D97706",
  },

  info: {
    light: "#60A5FA",
    main: "#3B82F6",
    dark: "#2563EB",
  },

  background: {
    primary: "#FFFFFF",
    secondary: "#F9FAFB",
    tertiary: "#F3F4F6",
    dark: "#1D3A70",
  },

  text: {
    primary: "#1D3A70",
    secondary: "#6B7280",
    tertiary: "#9CA3AF",
    inverse: "#FFFFFF",
    disabled: "#D1D5DB",
    accent: "#1DAB87",
  },

  border: {
    light: "#E5E7EB",
    main: "#D1D5DB",
    dark: "#6B7280",
  },

  finance: {
    profit: "#1DAB87",
    loss: "#EF4444",
    pending: "#F59E0B",
    card: {
      visa: "#1A1F71",
      mastercard: "#EB001B",
      amex: "#006FCF",
    },
  },
} as const;
