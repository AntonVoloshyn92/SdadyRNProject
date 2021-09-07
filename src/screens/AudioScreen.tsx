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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
  await TrackPlayer.add(songs);
};

const togglePlayback = async (playbackState: State) => {
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
  const progress = useProgress();

  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);
  const songSlider = useRef(null);
  const [repeatMode, setRepeatMode] = useState(RepeatMode.Off);

  const [trackArtwork, setTrackArtwork] = useState<string>();
  const [trackArtist, setTrackArtist] = useState<string>();
  const [trackTitle, setTrackTitle] = useState<string>();

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type == Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artwork, artist} = track;
      setTrackArtist(artist);
      setTrackArtwork(artwork);
      setTrackTitle(title);
    }
  });

  const repeatIcon = () => {
    if (repeatMode == RepeatMode.Off) {
      return 'repeat-off';
    }
    if (repeatMode == RepeatMode.Track) {
      return 'repeat-once';
    }
    if (repeatMode == RepeatMode.Queue) {
      return 'repeat';
    }
  };

  const changeRepeatMode = () => {
    if (repeatMode == RepeatMode.Off) {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode(RepeatMode.Track);
    }
    if (repeatMode == RepeatMode.Track) {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode(RepeatMode.Queue);
    }
    if (repeatMode == RepeatMode.Queue) {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode(RepeatMode.Off);
    }
  };

  useEffect(() => {
    setupPlayer();
    scrollX.addListener(({value}) => {
      const index = Math.round(value / width);
      skipTo(index);
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

  const skipTo = async (trackId: number) => {
    await TrackPlayer.skip(trackId);
  };

  const renderSongs = ({index, item}) => {
    return (
      <Animated.View
        style={{width: width, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.artworkWrapper}>
          <Image source={'${trackArtwork}'} style={styles.artworkImage} />
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
          <Text style={styles.songTitle}>{trackTitle}</Text>
          <Text style={styles.songArtist}>{trackArtist}</Text>
        </View>
        <Slider
          style={styles.progressContainer}
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          thumbTintColor="#FFD369"
          minimumTrackTintColor="#FFD369"
          maximumTrackTintColor="#FFF"
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />
        <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabelTxt}>
            {new Date(progress.position * 1000).toISOString().substr(14, 5)}
          </Text>
          <Text style={styles.progressLabelTxt}>
            {new Date((progress.duration - progress.position) * 1000)
              .toISOString()
              .substr(14, 5)}
          </Text>
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
          <TouchableOpacity onPress={() => togglePlayback(playbackState)}>
            <Ionicons
              name={
                playbackState == State.Playing
                  ? 'ios-pause-circle'
                  : 'ios-play-circle'
              }
              size={75}
              color="#FFD369"
            />
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
          <TouchableOpacity onPress={changeRepeatMode}>
            <MaterialCommunityIcons
              name={`${repeatIcon()}`}
              size={30}
              color="#777777"
            />
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
    title: 'Dzharahov',
    artist: 'Я в моментке',
    image: require('../assets/woman.jpg'),
    url: require('../assets/dzharahov_-_ya-v-momente.mp3'),
    id: 1,
  },
  {
    title: 'Federiko Fellini',
    artist: 'Galibri Mavik',
    image: require('../assets/image.jpeg'),
    url: require('../assets/galibri-mavik_-_federiko-fellini.mp3'),
    id: 2,
  },
  {
    title: "Ain't That Just Like A Woman",
    artist: 'Rodney',
    image: require('../assets/hands.png'),
    url: require('../assets/Hello.mp3'),
    id: 3,
  },
];
