import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, Alert} from 'react-native';

const {width, height} = Dimensions.get('window');

const VideoCard: React.FC<any> = () => {
  return (
    <View style={styles.main}>
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={require('../assets/image/woman.jpg')}
        />
        <View>
          <Text
            onPress={() => {
              Alert.alert('Hello');
            }}>
            Video Title
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  videoTextContainer: {},
  main: {
    backgroundColor: 'lightgrey',
    width: width * 0.9,
    height: 200,
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  image: {
    padding: 50,
    borderRadius: 20,
    width: 150,
    height: 100,
  },
});

export default VideoCard;
