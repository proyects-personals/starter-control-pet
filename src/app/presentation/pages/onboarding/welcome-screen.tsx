import { useAppTheme } from '@application';
import React from 'react';
import {  Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const WelcomeScreen = () => {
  const { setTheme } = useAppTheme();

  return (
    <>
      <Button onPress={() => setTheme('light')}>Light</Button>
      <Button onPress={() => setTheme('dark')}>Dark</Button>
    </>
  );
};

export default WelcomeScreen;