/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, Text, useColorScheme, View } from 'react-native';
import { I18nLanguageProvider, ThemeProvider } from '@application';
import React from 'react';

function App() {

  return (
    // <I18nLanguageProvider>
    //   <ThemeProvider>
       <View>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar />
        </View>
    //   </ThemeProvider>
    // </I18nLanguageProvider>
  );
}

export default App;
