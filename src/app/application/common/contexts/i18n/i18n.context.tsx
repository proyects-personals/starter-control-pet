import React, {
  useState,
  useEffect,
  useMemo,
} from 'react';

import {
  I18nLanguageContext,
  LanguageEnum,
  LanguageProviderProps,
  translationsMap,
} from '@/app/domain';

/**
 * I18nLanguageProvider
 *
 * @description
 * Proveedor de contexto para la internacionalización (i18n).
 * Gestiona el idioma actual, persistencia en localStorage
 * y exposición de traducciones tipadas.
 *
 * @version 1.0.0
 */
export const I18nLanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [languageState, setLanguageState] =
    useState<LanguageEnum>(getInitialLanguage());

  useEffect(syncLanguageFromStorage, [languageState]);

  /**
   * setLanguage
   *
   * @description
   * Cambia el idioma de la aplicación y lo persiste en localStorage.
   *
   * @param {LanguageEnum} lang - Idioma seleccionado
   */
  const setLanguage = (lang: LanguageEnum): void => {
    persistLanguage(lang);
    setLanguageState(lang);
  };

  const contextValue = useMemo(
    () => ({
      languageState,
      setLanguage,
      translations: translationsMap[languageState] ?? {},
    }),
    [languageState]
  );

  return (
    <I18nLanguageContext.Provider value={contextValue}>
      {children}
    </I18nLanguageContext.Provider>
  );

  /**
   * getInitialLanguage
   *
   * @description
   * Obtiene el idioma inicial desde localStorage o retorna el idioma por defecto.
   *
   * @returns {LanguageEnum}
   */
  function getInitialLanguage(): LanguageEnum {
    return (
      (localStorage.getItem('language') as LanguageEnum) ??
      LanguageEnum.EN
    );
  }

  /**
   * persistLanguage
   *
   * @description
   * Guarda el idioma en localStorage.
   *
   * @param {LanguageEnum} lang
   */
  function persistLanguage(lang: LanguageEnum): void {
    localStorage.setItem('language', lang);
  }

  /**
   * syncLanguageFromStorage
   *
   * @description
   * Sincroniza el estado del idioma con el valor almacenado en localStorage.
   * Evita desincronización entre pestañas o refrescos.
   */
  function syncLanguageFromStorage(): void {
    const storedLanguage =
      localStorage.getItem('language') as LanguageEnum | null;

    if (storedLanguage && storedLanguage !== languageState) {
      setLanguageState(storedLanguage);
    }
  }
};