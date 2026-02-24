/**
 * ThemeEnum
 *
 * @description
 * Enum que define los temas visuales soportados por la aplicación.
 * Se utiliza para tipar el estado del tema y su persistencia.
 *
 * Para agregar un nuevo tema:
 * 1. Añadir el valor en este enum
 * 2. Definir sus estilos (CSS / Tailwind / Theme config)
 *
 * @example
 * ThemeEnum.DARK
 * ThemeEnum.LIGHT
 *
 * @version 1.0.0
 */
export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}