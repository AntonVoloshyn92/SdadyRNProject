import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import NewsScreen from '../screens/NewsScreen';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator();

function StackNavigationNews() {
  const {t} = useTranslation();

  return (
    <Stack.Navigator initialRouteName="News">
      <Stack.Screen
        name="News"
        options={{
          title: t('navigation:news'),
        }}
        component={NewsScreen}
      />
      <Stack.Screen name="NewsDetailsScreen" component={NewsDetailsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigationNews;
