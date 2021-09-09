import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import NewsScreen, {NewsStackParamList} from '../screens/NewsScreen';
import {Articles} from '../interfaces/NewsInterface';

const Stack = createNativeStackNavigator();

function StackNavigationNews() {
  return (
    <Stack.Navigator initialRouteName="News">
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen
        name="NewsDetailsScreen"
        component={NewsDetailsScreen}
        initialParams={{childId: articles}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigationNews;
