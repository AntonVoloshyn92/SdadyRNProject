import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Selector from '../components/LanguageSelector';

function SettingScreen() {
  return (
    <View style={styles.main}>
      <Selector />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SettingScreen;
