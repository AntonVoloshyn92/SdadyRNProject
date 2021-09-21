import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VideoScreen from '../screens/VideoScreen';
import WacthVideoScreen from '../screens/WacthVideoScreen';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator();

function StackVideoNavigation() {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName="VideoScreen">
      <Stack.Screen
        name="VideoScreen"
        options={{
          title: t('navigation:video'),
        }}
        component={VideoScreen}
      />
      <Stack.Screen name="WacthVideoScreen" component={WacthVideoScreen} />
    </Stack.Navigator>
  );
}

export default StackVideoNavigation;
