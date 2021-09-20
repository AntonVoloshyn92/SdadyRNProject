import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {VideStackParamList} from '../navigation/navigation.types';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Icon} from 'react-native-elements';

const WacthVideoScreen: React.FC<any> = () => {
  const route = useRoute<RouteProp<VideStackParamList, 'WacthVideoScreen'>>();
  const {item} = route.params;

  const [playing, setPlaying] = useState(false);
  const [isMute, setMute] = useState(false);
  const controlRef = useRef();

  const onStateChange = (state: any) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
    if (state !== 'playing') {
      setPlaying(false);
    }
  };

  const togglePlaying = () => {
    setPlaying(prev => !prev);
  };
  const seekBackAndForth = (control: any) => {
    console.log('currentTime');
    controlRef.current?.getCurrentTime().then(currentTime => {
      control === 'forward'
        ? controlRef.current?.seekTo(currentTime + 15, true)
        : controlRef.current?.seekTo(currentTime - 15, true);
    });
  };
  const muteVideo = () => setMute(!isMute);
  const ControlIcon = ({name, onPress}: any) => (
    <Icon onPress={onPress} name={name} size={40} color="#fff" />
  );

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        ref={controlRef}
        play={playing}
        mute={isMute}
        videoId={item.id.videoId}
        onChangeState={onStateChange}
      />
      <View style={styles.controlContainer}>
        <ControlIcon
          onPress={() => seekBackAndForth('rewind')}
          name="skip-previous"
        />
        <ControlIcon
          onPress={togglePlaying}
          name={playing ? 'pause' : 'play-arrow'}
        />
        <ControlIcon
          onPress={() => seekBackAndForth('forward')}
          name="skip-next"
        />
        <ControlIcon
          onPress={muteVideo}
          name={isMute ? 'volume-up' : 'volume-off'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    flex: 1,
  },
  controlContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default WacthVideoScreen;
