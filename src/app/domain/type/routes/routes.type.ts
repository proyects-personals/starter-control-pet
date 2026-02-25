
import { NavigationProp } from '@react-navigation/native';
import { RouteNames } from '../../constants';

export type NavigationScreens = {
  [RouteNames.onboarding.Welcome]: undefined;
};

export type AppNavigationProp = NavigationProp<NavigationScreens>;