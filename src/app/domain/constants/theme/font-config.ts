import { MD3Type } from 'react-native-paper/lib/typescript/types';

/**
 * @description Configuración de tipografías (fonts) para la aplicación
 * Incluye estilos de display, headline y default para Material Design 3
 * @public
 * @author steveencues
 * @version 1.0.0
 * 
 * @example
 * import { fontConfig } from './fontConfig';
 * 
 * const headingFont = fontConfig.displaySmall.fontFamily; // 'Chapeau-Regular'
 * const defaultSize = fontConfig.default.fontSize; // 16
 */
export const fontConfig: Record<string, MD3Type> = {
  displaySmall: { fontFamily: 'Chapeau-Regular', fontSize: 36, fontWeight: '400', letterSpacing: 0, lineHeight: 44 },
  displayMedium: { fontFamily: 'Chapeau-Regular', fontSize: 45, fontWeight: '400', letterSpacing: 0, lineHeight: 52 },
  displayLarge: { fontFamily: 'Chapeau-Regular', fontSize: 57, fontWeight: '400', letterSpacing: 0, lineHeight: 64 },
  headlineMediumVariant: { fontFamily: 'Chapeau-Medium', fontSize: 28, fontWeight: '500', letterSpacing: 0, lineHeight: 36 },
  default: { fontFamily: 'Chapeau-Regular', fontWeight: '400', letterSpacing: 0, lineHeight: 24, fontSize: 16 },
};