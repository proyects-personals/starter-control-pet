import { useContext } from "react";
import { ThemeContext } from "../contexts";

export const useAppTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAppTheme debe usarse dentro de AppThemeProvider');
  }

  return context;
};