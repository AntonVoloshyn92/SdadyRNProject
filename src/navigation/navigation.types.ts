import {Articles} from '../interfaces/axiosIntarface/NewsInterface';
import {Items} from '../interfaces/axiosIntarface/YouTubeInterface';

/**
 * NEWS
 */
export type NewsStackParamList = {
  NewsScreen: undefined;
  NewsDetailsScreen: {article: Articles};
};

/**
 * VIDEO
 */
export type VideStackParamList = {
  VideoScreen: undefined;
  WacthVideoScreen: {video: Items};
};
