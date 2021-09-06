import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomNavigation from './src/navigation/BottomNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
