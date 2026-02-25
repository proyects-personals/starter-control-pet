import { DefaultTheme, configureFonts } from 'react-native-paper';
import { MD3Type } from 'react-native-paper/lib/typescript/types';
import { customText } from 'react-native-paper';

export type FontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'normal'
  | undefined;


export const fontWeights: Record<string, FontWeight> = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};

export const fontConfig: Record<string, MD3Type> = {
  displaySmall: {
    fontFamily: 'Chapeau-Regular',
    fontSize: 36,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 44,
  },
  displayMedium: {
    fontFamily: 'Chapeau-Regular',
    fontSize: 45,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 52,
  },
  displayLarge: {
    fontFamily: 'Chapeau-Regular',
    fontSize: 57,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 64,
  },
  headlineSmall: {
    fontFamily: 'Chapeau-Regular',
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 32,
  },
  headlineMediumVariant: {
    fontFamily: 'Chapeau-Medium',
    fontSize: 28,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 36,
  },
  headlineMedium: {
    fontFamily: 'Chapeau-Regular',
    fontSize: 28,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 36,
  },
  headlineLarge: {
    fontFamily: 'Chapeau-Regular',
    fontSize: 32,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 40,
  },
  titleSmall: {
    fontFamily: 'Chapeau-Medium',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  titleMedium: {
    fontFamily: 'Chapeau-Medium',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  titleLarge: {
    fontFamily: 'Chapeau-Regular',
    fontSize: 22,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 28,
  },
  labelSmall: {
    fontFamily: 'Chapeau-Medium',
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelMedium: {
    fontFamily: 'Chapeau-Medium',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelLarge: {
    fontFamily: 'Chapeau-Medium',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: 'Chapeau-Regular',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.4,
    lineHeight: 16,
  },
  bodyMedium: {
    fontFamily: 'Chapeau-Regular',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodyLarge: {
    fontFamily: 'Chapeau-Regular',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  default: {
    fontFamily: 'Chapeau-Regular',
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 24,
    fontSize: 16,
  },
};