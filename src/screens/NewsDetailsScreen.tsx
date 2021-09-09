import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {NewsStackParamList} from '../navigation/navigation.types';

function NewsDetailsScreen() {
  const route = useRoute<RouteProp<NewsStackParamList, 'NewsDetailsScreen'>>();
  const {article} = route.params;

  console.log('ARTICLE', article);

  console.log('====================================');
  console.log(route);
  console.log('====================================');
  console.log();
  console.log('====================================');
  return (
    <View>
      <Text>{article}</Text>
    </View>
  );
}

export default NewsDetailsScreen;
