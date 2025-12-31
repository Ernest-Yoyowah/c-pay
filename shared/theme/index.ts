import { colors } from "./colors";
import { borderRadius, spacing } from "./spacing";
import { typography } from "./typography";

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
} as const;

export type Theme = typeof theme;
export { borderRadius, colors, spacing, typography };
