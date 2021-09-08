import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {NewsCardProps} from '../interfaces/NewsCardProps';

const {width, height} = Dimensions.get('window');

const NewsCard: React.FC<NewsCardProps> = ({item, onClick}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick(item.url);
      }}>
      <View style={styles.cardView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.autor}>{item.author}</Text>
        <Image
          style={styles.image}
          source={item.urlToImage ? {uri: item.urlToImage} : null}
        />
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  title: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginHorizontal: width * 0.02,
    marginVertical: width * 0.05,
    color: 'gray',
    fontSize: 18,
  },
  image: {
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  autor: {
    marginBottom: height * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: 'gray',
  },
});

export default NewsCard;
