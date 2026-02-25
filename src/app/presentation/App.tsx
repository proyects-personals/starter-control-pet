import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routers/routers';

function App() {
  return (
    <NavigationContainer>
        <StatusBar />
        <Routes />
    </NavigationContainer>
  );
}

export default App;