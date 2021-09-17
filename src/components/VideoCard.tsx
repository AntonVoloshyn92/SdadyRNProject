import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {VideoCardProps} from '../interfaces/props/VideoCardProps';

const {width, height} = Dimensions.get('screen');

const VideoCard: React.FC<VideoCardProps> = ({item, onClick}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick(item);
      }}>
      <View style={styles.cardView}>
        <Image
          style={styles.image}
          source={{uri: item.snippet.thumbnails.medium.url}}
        />
        <Text style={styles.title}>{item.snippet.title}</Text>
        <Text style={styles.channelTitle}>{item.snippet.channelTitle}</Text>
        <Text style={styles.publishTime}>{item.snippet.publishTime}</Text>
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
    fontSize: 15,
    fontWeight: 'bold',
  },
  publishTime: {
    marginHorizontal: width * 0.02,
    marginVertical: width * 0.05,
    color: 'gray',
    fontSize: 12,
  },
  image: {
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
    borderRadius: 10,
  },
  channelTitle: {
    fontStyle: 'italic',
    marginBottom: height * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 12,
    color: 'gray',
  },
});

export default VideoCard;
