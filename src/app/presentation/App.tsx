import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { I18nLanguageProvider, ThemeProvider } from '@application';

export default function App() {
  return (
    <I18nLanguageProvider>
      <ThemeProvider>
        <View>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </I18nLanguageProvider>
  );
}
