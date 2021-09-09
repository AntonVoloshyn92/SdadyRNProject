import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {Articles} from '../interfaces/NewsInterface';
import {NewsStackParamList} from './NewsScreen';

function NewsDetailsScreen() {
  const route = useRoute<RouteProp<NewsStackParamList, 'NewsDetailsScreen'>>();
  const {childId} = route.params;

  console.log('====================================');
  console.log(route);
  console.log('====================================');
  console.log();
  console.log('====================================');
  return (
    <View>
      <Text>{childId}</Text>
    </View>
  );
}

export default NewsDetailsScreen;
