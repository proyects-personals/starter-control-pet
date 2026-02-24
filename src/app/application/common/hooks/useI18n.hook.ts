import { useContext } from 'react';
import { I18nLanguageContext } from '@/app/domain';

/**
 * useI18nLanguage
 *
 * @description
 * Hook para consumir el contexto de idioma (i18n) de la aplicación.
 * Permite acceder al idioma actual, cambiarlo
 * y obtener las traducciones correspondientes.
 *
 * Debe utilizarse dentro de I18nLanguageProvider.
 *
 * @example
 * const { languageState, setLanguage, translations } = useI18nLanguage();
 *
 * @version 1.0.0
 */
export const useI18nLanguage = () => {
  const context = useContext(I18nLanguageContext);

  if (!context) {
    throw new Error('useI18nLanguage must be used within I18nLanguageProvider');
  }

  return context;
};