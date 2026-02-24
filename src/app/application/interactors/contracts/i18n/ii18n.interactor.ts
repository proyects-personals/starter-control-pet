/**
 * II18nInteractor
 *
 * Contrato que define las operaciones de internacionalización
 * disponibles para la capa de presentación.
 *
 * Esta abstracción permite desacoplar la UI de la implementación
 * concreta del sistema de traducciones.
 *
 * @since 1.0.0
 * @layer Application
 */
export abstract class II18nInteractor {
  /**
   * Traduce una clave de idioma.
   *
   * @param key - Clave de traducción
   * @param params - Parámetros opcionales para interpolación
   * @returns Texto traducido
   */
  abstract translate(
    key: string,
    params?: Record<string, unknown>
  ): string;

  /**
   * Cambia el idioma activo de la aplicación.
   *
   * @param lang - Código del idioma
   */
  abstract changeLanguage(lang: string): void;

  /**
   * Retorna el idioma actualmente activo.
   *
   * @returns Código del idioma actual
   */
  abstract getCurrentLanguage(): string;
}