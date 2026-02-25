import { ThemeColors } from "../../interface";

/**
 * @description Colores del tema claro (Light Theme)
 * @public
 * @author steveencues
 * @version 1.0.0
 * 
 * @example
 * const primaryColor = lightColors.primary; // '#43007C'
 */
export const lightColors: ThemeColors = {
  primary: '#43007C',
  secondary: '#7520B5',
  tertiary: '#FF9E00',
  error: '#BA1A1A',
  background: '#FFFBF9',
  surface: '#FFF7FF',
  onBackground: '#1D1B1E',
  onSurface: '#1E1A22',
};

/**
 * @description Colores del tema oscuro (Dark Theme)
 * @public
 * @version 1.0.0
 * 
 * @example
 * const backgroundColor = darkColors.background; // '#1D1B1E'
 */
export const darkColors: ThemeColors = {
  primary: '#C795FF',
  secondary: '#CE91FF',
  tertiary: '#FFDDBB',
  error: '#FF5449',
  background: '#1D1B1E',
  surface: '#1E1A22',
  onBackground: '#FFF7FF',
  onSurface: '#FFF7FF',
};

/**
 * @description Colores del tema académico (Academic Theme)
 * @public
 * @version 1.0.0
 * 
 * @example
 * const tertiaryColor = academicColors.tertiary; // '#FFA300'
 */
export const academicColors: ThemeColors = {
  primary: '#00A2A5',
  secondary: '#BFE1E8',
  tertiary: '#FFA300',
  error: '#BA1A1A',
  background: '#F0FBFC',
  surface: '#E0F7F9',
  onBackground: '#002B2D',
  onSurface: '#002B2D',
};