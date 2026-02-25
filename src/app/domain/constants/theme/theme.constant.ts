import { Theme } from "@application";
import { academicColors, darkColors, lightColors } from "./colors.constant";

/**
 * @description Tema claro (Light Theme) de la aplicación
 * Incluye colores, tipografías y configuración de layout por defecto
 * @public
 * @version 1.0.0
 * 
 * @example
 * import { LightTheme } from './theme.constant';
 * console.log(LightTheme.name); // 'light'
 */
export const LightTheme = new Theme('light', lightColors, false);

/**
 * @description Tema oscuro (Dark Theme) de la aplicación
 * Incluye colores, tipografías y configuración de layout por defecto
 * @public
 * @version 1.0.0
 * 
 * @example
 * import { DarkTheme } from './theme.constant';
 * console.log(DarkTheme.dark); // true
 */
export const DarkTheme = new Theme('dark', darkColors, true);

/**
 * @description Tema académico (Academic Theme) de la aplicación
 * Se puede personalizar layout y columnas según requerimientos
 * @public
 * @version 1.0.0
 * 
 * @example
 * import { AcademicTheme } from './theme.constant';
 * console.log(AcademicTheme.layout.columns.medium); // 3
 */
export const AcademicTheme = new Theme('academic', academicColors, false);

/** @private - Configuración de columnas específicas para el tema académico */
AcademicTheme.layout.columns = { compact: 1, medium: 3, expanded: 6 };