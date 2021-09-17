import {Items} from './YouTubeInterface';

export interface NewsCardProps {
  item: Items;
  onClick: (itemLink: Items) => void;
}
