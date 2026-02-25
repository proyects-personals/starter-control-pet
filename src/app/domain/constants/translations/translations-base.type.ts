import { createContext } from 'react';
import en from '../../../../assets/i18n/en.json';
import es from '../../../../assets/i18n/es.json';

import { LanguageEnum } from '../../enum';
import { LanguageContextType, TranslationsType } from '../../type';

/**
 * translationsMap
 *
 * @description
 * Mapa de traducciones disponibles en la aplicación.
 * Cada clave representa un idioma soportado y su valor
 * contiene el objeto de traducciones tipado.
 * @example
 * translationsMap[LanguageEnum.EN].home.title
 *
 * @type {Record<LanguageEnum, TranslationsType>}
 * @version 1.0.0
 */
export const translationsMap: Record<LanguageEnum, TranslationsType> = {
  [LanguageEnum.EN]: en,
  [LanguageEnum.ES]: es,
};

/**
 * I18nLanguageContext
 *
 * @description
 * Contexto de React para la internacionalización (i18n).
 * Expone el idioma actual, el método para cambiarlo
 * y el objeto de traducciones correspondiente.
 * @example
 * const { languageState, setLanguage, translations } = useI18n();
 *
 * @type {React.Context<LanguageContextType | undefined>}
 * @version 1.0.0
 */
export const I18nLanguageContext =
  createContext<LanguageContextType | undefined>(undefined);