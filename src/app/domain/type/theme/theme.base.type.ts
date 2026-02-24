import { createContext, ReactNode } from 'react';
import { ThemeEnum } from '../../enum';

/**
 * ThemeContextType
 *
 * @description
 * Contrato del contexto de tema.
 * Expone el tema actual y los métodos para modificarlo.
 *
 * @example
 * const { theme, setTheme, toggleTheme } = useTheme();
 *
 * @version 1.0.0
 */
export type ThemeContextType = {
  theme: ThemeEnum;
  setTheme: (theme: ThemeEnum) => void;
  toggleTheme: () => void;
};

/**
 * ThemeProviderProps
 *
 * @description
 * Propiedades del proveedor de tema.
 *
 * @version 1.0.0
 */
export type ThemeProviderProps = {
  children: ReactNode;
};

/**
 * ThemeContext
 *
 * @description
 * Contexto global para la gestión de temas de la aplicación.
 *
 * @version 1.0.0
 */
export const ThemeContext =
  createContext<ThemeContextType | undefined>(undefined);