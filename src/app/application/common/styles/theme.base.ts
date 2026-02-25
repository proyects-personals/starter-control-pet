import { configureFonts, DefaultTheme } from "react-native-paper";
import { fontConfig, fontWeights } from "./fontConfig";

export const baseTheme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    ...configureFonts({ config: fontConfig }),
    fontWeights,
  },
  colors: {
    ...DefaultTheme.colors,
    primary: '#43007C',
    primary0: '#000000',
    primary10: '#2B0052',
  }
}
