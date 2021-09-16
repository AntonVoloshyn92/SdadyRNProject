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

const NewsCard: React.FC<NewsCardProps> = ({article, onClick}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick(article);
      }}>
      <View style={styles.cardView}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.autor}>{article.author}</Text>
        <Image style={styles.image} source={{uri: article.urlToImage}} />
        <Text style={styles.description}>{article.description}</Text>
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
    textAlign: 'center',
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
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
    borderRadius: 10,
  },
  autor: {
    marginBottom: height * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: 'gray',
  },
});

export default NewsCard;
