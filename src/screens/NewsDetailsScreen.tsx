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
      <Image style={styles.image} source={{uri: article.urlToImage}} />
      <Text style={styles.textNews}>{article.content}</Text>
      <OpenURLButton url={article.url}>Open News Source URL</OpenURLButton>
    </View>
  );
}

const OpenURLButton = ({url, children}: string | any) => {
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
    padding: 20,
    backgroundColor: '#fff',
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginStart: 10,
    fontWeight: 'bold',
    paddingTop: 20,
    padding: 10,
  },
  textNews: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    paddingTop: 20,
  },
  image: {
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 15,
    height: 200,
  },
});

export default NewsDetailsScreen;
