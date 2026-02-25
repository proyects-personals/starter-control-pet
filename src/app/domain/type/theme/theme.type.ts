/**
 * @description Nombres válidos de los temas que se pueden usar en la aplicación
 * @public
 * @author steveencues
 * @version 1.0.0
 * 
 * @example
 * let currentTheme: ThemeName = 'light';
 * currentTheme = 'dark';
 * currentTheme = 'academic';
 */
export type ThemeName = 'light' | 'dark' | 'academic';

/**
 * @description Define los breakpoints para calcular layouts y columnas según ancho de pantalla
 * @public
 * @author steveencues
 * @version 1.0.0
 * 
 * @example
 * const breakpoints: Breakpoints = {
 *   compact: 480,
 *   medium: 768,
 *   expanded: 1200,
 * };
 */
export type Breakpoints = {
  compact: number;
  medium: number;
  expanded: number;
};