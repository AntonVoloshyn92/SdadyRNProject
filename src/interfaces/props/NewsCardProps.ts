import {Articles} from '../axiosIntarface/NewsInterface';

export interface NewsCardProps {
  article: Articles;
  onClick: (articleLink: Articles) => void;
}
