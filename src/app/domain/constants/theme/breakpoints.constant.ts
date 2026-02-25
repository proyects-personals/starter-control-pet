import { Breakpoints } from "../../type";

/**
 * @description Breakpoints de la aplicación para calcular layout y columnas
 * @public
 * @author steveencues
 * @version 1.0.0
 * 
 * @example
 * console.log(breakpoints.compact); // 680
 */
export const breakpoints: Breakpoints = {
  compact: 680,
  medium: 900,
  expanded: 1200,
};

/**
 * @description Cantidad de columnas según breakpoint activo
 * @public
 * @param {number} width - Ancho de la pantalla
 * @param {Breakpoints} [customBreakpoints] - Opcional: breakpoints personalizados
 * @returns {number} Número de columnas calculadas
 * @version 1.0.0
 * 
 * @example
 * const width = 750;
 * const cols = columnsByBreakpoint(width);
 * console.log(cols); // 2
 */
export const columnsByBreakpoint = (
  width: number,
  customBreakpoints: Breakpoints = breakpoints
): number => {
  const { compact, medium } = customBreakpoints;

  if (width <= compact) return 1;
  if (width <= medium) return 2;
  return 4;
};