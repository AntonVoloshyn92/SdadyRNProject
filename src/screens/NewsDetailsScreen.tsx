import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NewsStackParamList} from '../navigation/navigation.types';

function NewsDetailsScreen() {
  const route = useRoute<RouteProp<NewsStackParamList, 'NewsDetailsScreen'>>();
  const {article} = route.params;

  console.log('====================================');
  console.log(article);
  console.log('====================================');

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textTitle}>{article.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
  },
});

export default NewsDetailsScreen;
