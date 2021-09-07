import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ModalScreen from '../screens/ModalScreen';
import AudioScreen from '../screens/AudioScreen';
import ItemScreen from '../screens/NewsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Item Screen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="News Screen"
        component={ItemScreen}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-newspaper" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Modal Screen"
        component={ModalScreen}
        options={{
          tabBarLabel: 'Modal',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Audio Screen"
        component={AudioScreen}
        options={{
          tabBarLabel: 'Music',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-musical-notes" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
