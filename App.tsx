import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomNavigation from './src/navigation/BottomNavigation';
import {initReactI18next} from 'react-i18next';
import i18next from 'i18next';

i18next.use(initReactI18next).init({
  resources: {
    en: {},
    rus: {},
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;
