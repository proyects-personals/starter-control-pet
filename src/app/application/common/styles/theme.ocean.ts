import { baseTheme } from './theme.base';

export const oceanTheme = {
  ...baseTheme,
  dark: false,
  colors: {
    ...baseTheme.colors,
    primary: '#006D77',
    secondary: '#83C5BE',
    background: '#EDF6F9',
    surface: '#FFFFFF',
    onSurface: '#023047',
  },
};