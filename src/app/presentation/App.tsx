import { StatusBar, Text, View } from 'react-native';
import { ThemeProvider } from '@application';
import React from 'react';

function App() {
  return (
    <ThemeProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
        <Text>Hola mundo</Text>
        <StatusBar />
      </View>
    </ThemeProvider>
  );
}

export default App;
