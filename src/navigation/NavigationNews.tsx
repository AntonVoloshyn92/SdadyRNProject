import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import NewsScreen from '../screens/NewsScreen';

const Stack = createNativeStackNavigator();

function StackNavigationNews() {
  return (
    <Stack.Navigator initialRouteName="News">
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="NewsDetailsScreen" component={NewsDetailsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigationNews;
