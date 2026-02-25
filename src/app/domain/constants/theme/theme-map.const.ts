import { AppTheme } from "../../interface";
import { ThemeName } from "../../type";
import { AcademicTheme, DarkTheme, LightTheme } from "./theme.constant";

/**
 * themeMap
 * 
 * @description Mapa de temas disponibles
 * @public
 * @author steveencues
 * @version 1.0.0
 */
export const themeMap: Record<ThemeName, AppTheme> = {
  light: LightTheme,
  dark: DarkTheme,
  academic: AcademicTheme,
};
