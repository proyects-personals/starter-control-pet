import { AppTheme, fontConfig, LayoutConfig } from '@domain';

/**
 * @description Clase que representa un tema completo de la aplicación
 * Incluye colores, tipografías, layout y modo oscuro
 * @public
 * @author steveencues
 * @version 1.0.0
 * 
 * @example
 * import { Theme } from './Theme';
 * import { lightColors } from './colors.constant';
 * 
 * const lightTheme = new Theme('light', lightColors, false, {
 *   breakpoints: { compact: 680, medium: 900, expanded: 1200 },
 *   columns: { compact: 1, medium: 2, expanded: 4 },
 * });
 */
export class Theme implements AppTheme {
  name: string;
  colors: AppTheme['colors'];
  fonts = fontConfig;
  dark: boolean;
  layout: LayoutConfig;

  /**
   * @description Crea un nuevo tema con colores, layout y modo oscuro
   * @param {string} name - Nombre del tema
   * @param {AppTheme['colors']} colors - Colores del tema
   * @param {boolean} [dark=false] - Indica si es tema oscuro
   * @param {LayoutConfig} [layoutConfig] - Configuración de breakpoints y columnas
   */
  constructor(
    name: string,
    colors: AppTheme['colors'],
    dark = false,
    layoutConfig?: LayoutConfig
  ) {
    this.name = name;
    this.colors = colors;
    this.dark = dark;

    this.layout = layoutConfig ?? {
      breakpoints: { compact: 680, medium: 900, expanded: 1200 },
      columns: { compact: 1, medium: 2, expanded: 4 },
    };
  }
}