import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routers/routers';
import { PaperProvider } from 'react-native-paper';
import { AppThemeProvider, useAppTheme } from '../application';


function AppContent() {
  
  return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppThemeProvider>
      <AppContent />
    </AppThemeProvider>
  );
}