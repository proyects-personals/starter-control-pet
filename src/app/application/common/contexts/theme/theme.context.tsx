import React, { useState, useEffect, useMemo } from 'react';
import { Appearance } from 'react-native';

import {
  ThemeContext,
  ThemeEnum,
  ThemeProviderProps,
} from '@domain';

import { storage } from '@infrastructure';

const THEME_KEY = 'theme';
const USER_PREF_KEY = 'hasUserThemePreference';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeEnum>(ThemeEnum.LIGHT);
  const [hasUserPreference, setHasUserPreference] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = storage.getString(THEME_KEY);
    const storedPreference = storage.getBoolean(USER_PREF_KEY);

    if (storedTheme && storedPreference) {
      setHasUserPreference(true);
      setThemeState(storedTheme as ThemeEnum);
      return;
    }

    const systemTheme = Appearance.getColorScheme();
    setThemeState(
      systemTheme === 'dark' ? ThemeEnum.DARK : ThemeEnum.LIGHT
    );
  }, []);

  useEffect(() => {
    if (hasUserPreference) {
      storage.set(THEME_KEY, theme);
      storage.set(USER_PREF_KEY, true);
    }
  }, [theme, hasUserPreference]);

  const setTheme = (newTheme: ThemeEnum): void => {
    setHasUserPreference(true);
    setThemeState(newTheme);
  };

  const toggleTheme = (): void => {
    setHasUserPreference(true);
    setThemeState(prev =>
      prev === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK
    );
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};