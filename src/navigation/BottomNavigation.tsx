import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ModalScreen from '../screens/ModalScreen';
import AudioScreen from '../screens/AudioScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigationNews from './NavigationNews';
import SettingScreen from '../screens/SettingScreen';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="Item Screen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="News"
        children={StackNavigationNews}
        options={{
          headerShown: false,
          tabBarLabel: t('Navigate:news'),
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-newspaper" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Modal"
        component={ModalScreen}
        options={{
          tabBarLabel: t('Navigate:modal'),
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Audio"
        component={AudioScreen}
        options={{
          tabBarLabel: t('Navigate:music'),
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-musical-notes" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: t('Navigate:settings'),
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
