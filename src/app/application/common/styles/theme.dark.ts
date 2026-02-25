import { baseTheme } from "./theme.base";

export const darkTheme = {
  ...baseTheme,
  dark: true,
  colors: {
    ...baseTheme.colors,
    primary: '#DBB8FF',
    background: '#1E1A22',
    surface: '#332F37',
    onSurface: '#F7EEF9',
  },
};