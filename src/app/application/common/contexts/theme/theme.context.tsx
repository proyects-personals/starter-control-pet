import React, {
  useState,
  useEffect,
  useMemo,
} from 'react';

import { ThemeContext, ThemeEnum, ThemeProviderProps } from '@/app/domain';

/**
 * ThemeProvider
 *
 * @description
 * Proveedor del contexto de tema.
 * Por defecto utiliza el tema del sistema operativo (celular / PC).
 * Una vez que el usuario selecciona un tema, este se persiste
 * y tiene prioridad sobre el tema del sistema.
 *
 * @version 1.0.0
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeEnum>(getInitialTheme());
  const [hasUserPreference, setHasUserPreference] =
    useState<boolean>(hasStoredTheme());

  /**
   * Persistencia SOLO cuando el usuario ya eligió un tema.
   */
  useEffect(() => {
    if (hasUserPreference) {
      persistTheme(theme);
    }
  }, [theme, hasUserPreference]);

  /**
   * setTheme
   *
   * @description
   * Establece el tema elegido por el usuario y lo marca
   * como preferencia persistente.
   *
   * @param {ThemeEnum} newTheme
   */
  const setTheme = (newTheme: ThemeEnum): void => {
    setHasUserPreference(true);
    setThemeState(newTheme);
  };

  /**
   * toggleTheme
   *
   * @description
   * Alterna entre los temas LIGHT y DARK.
   * Este cambio se considera una acción del usuario
   * y se persiste automáticamente.
   */
  const toggleTheme = (): void => {
    setHasUserPreference(true);
    setThemeState((prev) =>
      prev === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK
    );
  };

  /**
   * Valor memorizado del contexto.
   */
  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );

  /**
   * getInitialTheme
   *
   * @description
   * Determina el tema inicial siguiendo este orden:
   * 1. Tema guardado por el usuario
   * 2. Tema del sistema operativo
   *
   * @returns {ThemeEnum}
   */
  function getInitialTheme(): ThemeEnum {
    const storedTheme = localStorage.getItem('theme') as ThemeEnum | null;
    if (storedTheme) {
      return storedTheme;
    }

    return getSystemTheme();
  }

  /**
   * hasStoredTheme
   *
   * @description
   * Indica si el usuario ya ha seleccionado un tema previamente.
   *
   * @returns {boolean}
   */
  function hasStoredTheme(): boolean {
    return localStorage.getItem('theme') !== null;
  }

  /**
   * getSystemTheme
   *
   * @description
   * Obtiene el tema preferido del sistema operativo.
   * Fallback seguro a LIGHT si no se puede detectar.
   *
   * @returns {ThemeEnum}
   */
  function getSystemTheme(): ThemeEnum {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return ThemeEnum.DARK;
    }

    return ThemeEnum.LIGHT;
  }

  /**
   * persistTheme
   *
   * @description
   * Persiste el tema elegido por el usuario.
   *
   * @param {ThemeEnum} theme
   */
  function persistTheme(theme: ThemeEnum): void {
    localStorage.setItem('theme', theme);
  }
};