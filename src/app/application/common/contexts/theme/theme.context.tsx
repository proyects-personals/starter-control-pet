import React, { createContext, useContext, useMemo, useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { lightTheme } from '../../styles/theme.light';
import { darkTheme } from '../../styles/theme.dark';
import { oceanTheme } from '../../styles/theme.ocean';

export type AppThemeName = 'light' | 'dark' | 'ocean';

export const themes: Record<AppThemeName, any> = {
  light: lightTheme,
  dark: darkTheme,
  ocean: oceanTheme,
};

type ThemeContextType = {
  theme: AppThemeName;
  setTheme: (theme: AppThemeName) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<AppThemeName>('light');

  const paperTheme = useMemo(() => themes[theme], [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <PaperProvider theme={paperTheme}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeController = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeController debe usarse dentro de AppThemeProvider');
  }

  return context;
};