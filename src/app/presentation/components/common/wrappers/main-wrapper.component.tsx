import { useTheme } from '@application';
import { View, Text } from 'react-native';
import React from 'react';

export const MainWrapperComponent = () => {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: theme.colors.onBackground }}>Hola con tema</Text>
    </View>
  );
};