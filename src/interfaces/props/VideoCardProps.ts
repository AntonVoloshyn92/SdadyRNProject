import {Items} from '../axiosIntarface/YouTubeInterface';

export interface VideoCardProps {
  item: Items;
  onClick: (itemLink: Items) => void;
}
