import { getColumns, ThemeContext, themeMap, ThemeName } from '@domain';
import React, { ReactNode, useState, useEffect, useMemo, useCallback } from 'react';
import { Appearance, useWindowDimensions } from 'react-native';

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Componente proveedor de tema global
 * @public
 * @param {ThemeProviderProps} props - Props del componente
 * @version 1.0.0
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { width } = useWindowDimensions();

  const getDefaultTheme = useCallback((): ThemeName => {
    return Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';
  }, []);

  const [themeName, setThemeName] = useState<ThemeName>(getDefaultTheme);

  const theme = useMemo(() => themeMap[themeName], [themeName]);

  /**
   * Cambia el tema activo
   * @public
   * @param {ThemeName} name - Nombre del tema a activar
   */
  const setTheme = useCallback((name: ThemeName) => setThemeName(name), []);

  /**
   * Calcula columnas según ancho y tema
   * @private
   * @returns {number} Columnas actuales
   */
  const columns = useMemo(() => getColumns(theme, width), [theme, width]);

  /**
   * @private
   * Suscripción al cambio de colorScheme del sistema
   * Solo aplica si el usuario no eligió tema personalizado
   */
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (themeName === 'light' || themeName === 'dark') {
        setTheme(colorScheme === 'dark' ? 'dark' : 'light');
      }
    });
    return () => subscription.remove();
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme, columns }}>
      {children}
    </ThemeContext.Provider>
  );
};