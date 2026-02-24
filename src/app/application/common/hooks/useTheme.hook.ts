import { useContext } from 'react';
import { ThemeContext } from '@/app/domain';

/**
 * useTheme
 *
 * @description
 * Hook para consumir el contexto de tema de la aplicación.
 * Permite acceder al tema actual y a los métodos
 * para modificarlo de forma segura.
 *
 * Debe usarse dentro de ThemeProvider.
 *
 * @example
 * const { theme, setTheme, toggleTheme } = useTheme();
 *
 * @version 1.0.0
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
};