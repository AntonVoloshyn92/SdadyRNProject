import {Articles} from './NewsInterface';

export interface NewsCardProps {
  portfolioItem: Articles;
  onClick: (articleLink: string) => void;
}
