import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {Image} from 'react-native-elements/dist/image/Image';
import Slider from '@react-native-community/slider';
// import songs from '../model/date';

const {width, height} = Dimensions.get('window');

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer();

  await TrackPlayer.add({
    url: 'http://example.com/avaritia.mp3', // Load media from the network
    title: 'Avaritia',
    artist: 'deadmau5',
    album: 'while(1<2)',
    genre: 'Progressive House, Electro House',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'http://example.com/cover.png', // Load artwork from the network
    duration: 402, // Duration in seconds
  });
};

const toddlePlayback = async (playbackState: State) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack != null) {
    if (playbackState == State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

export default function AudioScreen() {
  const playbackState = usePlaybackState();

  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);
  const songSlider = useRef(null);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      const index = Math.round(value / width);
      setSongIndex(index);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  });

  const skipToNext = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };

  const skipToPrevius = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  const renderSongs = ({index, item}) => {
    return (
      <Animated.View
        style={{width: width, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.artworkWrapper}>
          <Image source={item.image} style={styles.artworkImage} />
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
        <Animated.FlatList
          ref={songSlider}
          data={songs}
          renderItem={renderSongs}
          // keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: scrollX},
                },
              },
            ],
            {useNativeDriver: true},
          )}
        />

        <View>
          <Text style={styles.songTitle}>{songs[songIndex].title}</Text>
          <Text style={styles.songArtist}>{songs[songIndex].artist}</Text>
        </View>
        <Slider
          style={styles.progressContainer}
          value={10}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="#FFD369"
          minimumTrackTintColor="#FFD369"
          maximumTrackTintColor="#FFF"
          onSlidingComplete={() => {}}
        />
        <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabelTxt}>0:00</Text>
          <Text style={styles.progressLabelTxt}>3:55</Text>
        </View>
        <View style={styles.musicControlls}>
          <TouchableOpacity onPress={skipToPrevius}>
            <Ionicons
              name="play-skip-back-outline"
              size={35}
              color="#FFD369"
              style={{marginTop: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-pause-circle" size={75} color="#FFD369" />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToNext}>
            <Ionicons
              name="play-skip-forward-outline"
              size={35}
              color="#FFD369"
              style={{marginTop: 25}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomControler}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="repeat" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="share-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ellipsis-horizontal" size={30} color="#777777" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },

  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerButton: {
    elevation: 10,
    marginBottom: 10,
    width: '50%',
    justifyContent: 'center',
    backgroundColor: 'cornsilk',
    borderRadius: 15,
  },

  bottomContainer: {
    borderTopColor: '#393E46',
    borderTopWidth: 1,
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
  },
  bottomControler: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },

  artworkWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  artworkImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },

  songTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#EEEEEE',
  },
  songArtist: {
    fontSize: 16,
    fontWeight: '200',
    textAlign: 'center',
    color: '#EEEEEE',
  },
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelTxt: {
    color: '#fff',
  },

  musicControlls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 15,
  },
});

const songs = [
  {
    title: 'Abilene',
    artist: 'Gibson, D',
    image: require('../assets/woman.jpg'),
    id: 1,
  },
  {
    title: "Ain't Talkin' 'Bout Love",
    artist: 'Harlan',
    image: require('../assets/image.jpeg'),
    id: 2,
  },
  {
    title: "Ain't That Just Like A Woman",
    artist: 'Rodney',
    image: require('../assets/hands.png'),
    id: 3,
  },
];
