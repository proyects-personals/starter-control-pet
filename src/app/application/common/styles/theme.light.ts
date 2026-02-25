import { baseTheme } from './theme.base';

export const lightTheme = {
  ...baseTheme,
  dark: false,
  colors: {
    ...baseTheme.colors,
    primary: '#43007C',
    background: '#FFFBFF',
    surface: '#FFF7FF',
    onSurface: '#1E1A22',
  },
};