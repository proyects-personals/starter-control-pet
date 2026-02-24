import { ReactNode } from 'react';
import { LanguageEnum } from '../../enum';
import { TranslationsType } from './translations.type';

/**
 * LanguageProviderProps
 *
 * @description
 * Propiedades del proveedor de idioma (I18nLanguageProvider).
 * Define los nodos hijos que serán envueltos por el contexto.
 *
 * @example
 * <I18nLanguageProvider>
 *   <App />
 * </I18nLanguageProvider>
 *
 * @version 1.0.0
 */
export type LanguageProviderProps = {
  children: ReactNode;
};

/**
 * LanguageContextType
 *
 * @description
 * Contrato del contexto de idioma.
 * Expone el idioma actual, el método para cambiarlo
 * y las traducciones correspondientes.
 *
 * @example
 * const { languageState, setLanguage, translations } = useI18n();
 *
 * @version 1.0.0
 */
export type LanguageContextType = {
  languageState: LanguageEnum;
  setLanguage: (lang: LanguageEnum) => void;
  translations: Partial<TranslationsType>;
};