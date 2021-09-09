import {Articles} from './NewsInterface';

export interface NewsCardProps {
  article: Articles;
  onClick: (articleLink: Articles) => void;
}
