/**
 * TranslationsType
 *
 * @description
 * Define la estructura base de las traducciones de la aplicación.
 * Garantiza consistencia entre los archivos JSON de idiomas
 * y el uso de textos en los componentes.
 *
 * Toda clave definida aquí debe existir
 * en los archivos de traducción (en.json, es.json, etc.).
 *
 * @example
 * translations.home.title
 * translations.auth.login.title
 *
 * @version 1.0.0
 */
export type TranslationsType = {
  home: {
    title: string;
    description: string;
  },
  auth: {
    login: {
      title: string;
    },
    register: {
      title: string;
    },
  },
};