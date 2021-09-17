import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import VideoCard from '../components/VideoCard';
import {VideoCardProps} from '../interfaces/props/VideoCardProps';
import {Items} from '../interfaces/axiosIntarface/YouTubeInterface';
import YouTubeService from '../services/YouTubeService';
import {RootState} from '../store';
import {isWhiteThemeSelector} from '../store/app/app.selector';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {VideStackParamList} from '../navigation/navigation.types';

const VideoScreen: React.FC<
  VideoCardProps & ReturnType<typeof mapStateToProps>
> = ({isWhiteTheme}) => {
  const [video, setVideo] = useState<Items[]>([]);

  const navigation =
    useNavigation<StackNavigationProp<VideStackParamList, 'VideoScreen'>>();

  const fecthYouTubeCallBack = useCallback(async (queryString: string) => {
    const response = await YouTubeService.getVideoListDate(
      'snippet',
      20,
      'video',
    );
    setVideo(response);
  }, []);

  const query = 'https://www.googleapis.com/youtube/v3/search';

  useEffect(() => {
    fecthYouTubeCallBack(query);
  }, [fecthYouTubeCallBack, query]);

  return (
    <View
      style={[styles.workSpace, isWhiteTheme ? styles.main : styles.mainDark]}>
      <FlatList
        data={video}
        renderItem={({item}) => {
          return (
            <VideoCard
              item={item}
              onClick={() => {
                navigation.navigate('WacthVideoScreen', {
                  item: item,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  isWhiteTheme: isWhiteThemeSelector(state),
});

const styles = StyleSheet.create({
  workSpace: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainDark: {
    flex: 1,
    backgroundColor: '#6e798a',
  },
});

export default connect(mapStateToProps)(VideoScreen);
