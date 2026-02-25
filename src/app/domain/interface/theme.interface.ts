import { MD3Type } from "react-native-paper/lib/typescript/types";
import { ThemeName } from "../type";
import { ThemeColors } from "./colors.interface";

/**
 * @description Interfaz para el contexto global de tema
 * @public
 * @author steveencues
 * @version 1.0.0
 * 
 * @example
 * const themeContext: ThemeContextInterface = {
 *   theme: lightTheme,
 *   themeName: 'light',
 *   setTheme: (name) => console.log(name),
 *   columns: 2,
 * };
 */
export interface ThemeContextInterface {
  theme: AppTheme;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
  columns: number;
}

/**
 * @description Configuración del layout para breakpoints y número de columnas
 * @public
 * @version 1.0.0
 * 
 * @example
 * const layout: LayoutConfig = {
 *   breakpoints: { compact: 480, medium: 768, expanded: 1200 },
 *   columns: { compact: 1, medium: 2, expanded: 4 },
 * };
 */
export interface LayoutConfig {
  breakpoints: {
    compact: number;
    medium: number;
    expanded: number;
  };
  columns: {
    compact: number;
    medium: number;
    expanded: number;
  };
}

/**
 * @description Representa un tema completo de la aplicación
 * @public
 * @version 1.0.0
 * 
 * @example
 * const lightTheme: AppTheme = {
 *   name: 'light',
 *   colors: lightColors,
 *   fonts: {
 *     regular: { fontFamily: 'Roboto-Regular', fontWeight: '400' },
 *     medium: { fontFamily: 'Roboto-Medium', fontWeight: '500' },
 * },
 *   dark: false,
 *   layout: {
 *     breakpoints: { compact: 480, medium: 768, expanded: 1200 },
 *     columns: { compact: 1, medium: 2, expanded: 4 },
 *   },
 * };
 */
export interface AppTheme {
  name: string;
  colors: ThemeColors;
  fonts: Record<string, MD3Type>;
  dark: boolean;
  layout: LayoutConfig;
}