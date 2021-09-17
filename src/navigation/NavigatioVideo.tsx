import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VideoScreen from '../screens/VideoScreen';
import WacthVideoScreen from '../screens/WacthVideoScreen';

const Stack = createNativeStackNavigator();

function StackVideoNavigation() {
  return (
    <Stack.Navigator initialRouteName="VideoScreen">
      <Stack.Screen name="VideoScreen" component={VideoScreen} />
      <Stack.Screen name="WacthVideoScreen" component={WacthVideoScreen} />
    </Stack.Navigator>
  );
}

export default StackVideoNavigation;
