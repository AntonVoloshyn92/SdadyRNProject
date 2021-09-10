import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {useCallback} from 'react';
import {Alert} from 'react-native';
import {View, Text, StyleSheet, Linking, Button} from 'react-native';
import {Image} from 'react-native-elements';
import {NewsStackParamList} from '../navigation/navigation.types';

function NewsDetailsScreen() {
  const route = useRoute<RouteProp<NewsStackParamList, 'NewsDetailsScreen'>>();
  const {article} = route.params;

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textTitle}>{article.title}</Text>
      <Text>{article.author}</Text>
      <Text style={styles.textNews}>{article.content}</Text>
      <OpenURLButton url={article.url}>Open News Source URL</OpenURLButton>
    </View>
  );
}

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

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
  textAutor: {
    fontSize: 10,
    marginHorizontal: 10,
  },
  textNews: {
    fontSize: 14,
    paddingTop: 20,
  },
  image: {
    padding: 20,
    width: 200,
    height: 200,
  },
});

export default NewsDetailsScreen;
