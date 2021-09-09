import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SettingScreen() {
  return (
    <View style={styles.main}>
      <Text>Setting</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingScreen;
