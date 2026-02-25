import { ThemeContext, ThemeContextInterface } from "@domain";
import { useContext } from "react";

/**
 * Hook para consumir ThemeContext
 * @public
 * @version 1.0.0
 * @returns {ThemeContextProps} Objeto con theme, themeName, setTheme y columns
 */
export const useTheme = (): ThemeContextInterface => useContext(ThemeContext);