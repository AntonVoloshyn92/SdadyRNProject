import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';

const Stack = createNativeStackNavigator();

function StackNavigationNews() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="News">
        <Stack.Screen name="NewsDetailsScreen" component={NewsDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigationNews;
