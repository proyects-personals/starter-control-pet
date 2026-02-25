import { createContext } from "react";
import { ThemeContextInterface } from "../../interface";
import { LightTheme } from "./theme.constant";

/**
 * @description Contexto global de tema para la aplicación
 * Contiene el theme activo, nombre del tema, función para cambiar el tema y columnas actuales
 * @public
 * @author steveencues
 * @version 1.0.0
 * 
 * @example
 * import { ThemeContext } from './themeContext';
 * import { useContext } from 'react';
 * 
 * const { theme, themeName, setTheme, columns } = useContext(ThemeContext);
 * console.log(themeName); // 'light'
 * setTheme('dark'); // Cambia el tema
 */
export const ThemeContext = createContext<ThemeContextInterface>({
  theme: LightTheme,
  themeName: 'light',
  setTheme: () => {},
  columns: 1,
});