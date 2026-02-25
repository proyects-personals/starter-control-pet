import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from '../pages/onboarding/welcome-screen';
import { NavigationScreens, RouteNames } from '@domain';

const Stack = createStackNavigator<NavigationScreens>();

const RouterOnboarding = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteNames.onboarding.Welcome}
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
};

export default RouterOnboarding;