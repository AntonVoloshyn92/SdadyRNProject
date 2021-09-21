import {Items} from '../axiosIntarface/YouTubeInterface';

export interface VideoCardProps {
  video: Items;
  onClick: (itemLink: Items) => void;
}
