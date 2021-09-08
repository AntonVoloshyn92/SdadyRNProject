import React from 'react';
import {View, Text} from 'react-native';

function NewsDetailsScreen(props) {
  console.log('====================================');
  console.log(props);
  console.log('====================================');
  return (
    <View>
      <Text>{props.url}</Text>
    </View>
  );
}

export default NewsDetailsScreen;
