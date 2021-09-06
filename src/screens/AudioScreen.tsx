import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
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

  const renderSongs = ({index, item}) => {
    return (
      <View style={styles.artworkWrapper}>
        <Image
          source={require('../assets/woman.jpg')}
          style={styles.artworkImage}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
        <FlatList
          data={songs}
          renderItem={renderSongs}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        />
        <View>
          <Text style={styles.songTitle}>Song Title</Text>
          <Text style={styles.songArtist}>Song Artist Name</Text>
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
          <TouchableOpacity onPress={() => {}}>
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
          <TouchableOpacity onPress={() => {}}>
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
