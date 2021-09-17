import React, {useEffect, useState, useCallback} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import VideoCard from '../components/VideoCard';
import {Items} from '../interfaces/YouTubeInterface';
import YouTubeService from '../services/YouTubeService';
import {RootState} from '../store';
import {isWhiteThemeSelector} from '../store/app/app.selector';
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyBWaen7Bi6bhBnTqdmLG4PkqcfexEjk2uU youtube url

const globalStyles = require('../style/style');

const VideoScreen: React.FC<ReturnType<typeof mapStateToProps>> = ({
  isWhiteTheme,
}) => {
  const [video, setVideo] = useState<Items[]>([]);

  const fecthYouTubeCallBack = useCallback(async (queryString: string) => {
    const response = await YouTubeService.getVideoListDate(
      'snippet',
      20,
      'video',
    );
    console.log('====================================');
    console.log(response);
    console.log('====================================');
    setVideo(response);
  }, []);

  const query = 'https://www.googleapis.com/youtube/v3/search';

  useEffect(() => {
    fecthYouTubeCallBack(query);
  }, [fecthYouTubeCallBack, query]);

  return (
    <View
      style={[
        globalStyles.workSpace,
        isWhiteTheme ? globalStyles.main : globalStyles.mainDark,
      ]}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Alarm');
        }}>
        <VideoCard />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  isWhiteTheme: isWhiteThemeSelector(state),
});

export default connect(mapStateToProps)(VideoScreen);
