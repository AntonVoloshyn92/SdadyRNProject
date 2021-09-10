import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomNavigation from './src/navigation/BottomNavigation';
import './src/constants/translations/i18n';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;
