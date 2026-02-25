import { AppTheme } from "../../interface";

/**
 * @description Calcula el número de columnas según ancho de pantalla y breakpoints del theme
 * @param {AppTheme} theme - Tema activo
 * @param {number} width - Ancho actual de la pantalla
 * @author steveencues
 * @returns {number} Columnas correspondientes
 * 
 * @example
 * const width = 500;
 * const columns = getColumns(LightTheme, width);
 * console.log(columns); // Ej: 2 (dependiendo de los breakpoints del tema)
 */
export const getColumns = (theme: AppTheme, width: number): number => {
  const { breakpoints, columns } = theme.layout;
  if (width <= breakpoints.compact) return columns.compact;
  if (width <= breakpoints.medium) return columns.medium;
  return columns.expanded;
};