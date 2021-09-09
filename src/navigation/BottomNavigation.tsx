import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ModalScreen from '../screens/ModalScreen';
import AudioScreen from '../screens/AudioScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigationNews from './NavigationNews';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
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
          tabBarLabel: 'News',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-newspaper" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Modal"
        component={ModalScreen}
        options={{
          tabBarLabel: 'Modal',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Audio"
        component={AudioScreen}
        options={{
          tabBarLabel: 'Music',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-musical-notes" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
