/**
 * @description Define los colores principales que conforman un tema de la aplicación
 * @public
 * @author steveencues
 * @version 1.0.0
 * 
 * @example
 * const lightColors: ThemeColors = {
 *   primary: '#6200ee',
 *   secondary: '#03dac6',
 * };
 */
export interface ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
  error: string;
  background: string;
  surface: string;
  onBackground: string;
  onSurface: string;
}