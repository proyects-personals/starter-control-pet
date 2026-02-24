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
} from '@domain';
import { storage } from '@infrastructure';


const LANGUAGE_KEY = 'language';

/**
 * I18nLanguageProvider
 *
 * Provider i18n con almacenamiento nativo en memoria (MMKV).
 * Ultra rápido, sin AsyncStorage.
 */
export const I18nLanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [languageState, setLanguageState] = useState<LanguageEnum>(
    LanguageEnum.EN
  );

  useEffect(() => {
    const storedLanguage = storage.getString(LANGUAGE_KEY);
    if (storedLanguage) {
      setLanguageState(storedLanguage as LanguageEnum);
    }
  }, []);

  const setLanguage = (lang: LanguageEnum): void => {
    storage.set(LANGUAGE_KEY, lang);
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
};