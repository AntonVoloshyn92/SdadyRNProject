import {Articles} from './NewsInterface';

export interface StockListItemProps {
  portfolioItem: Articles;
  onClick: (stock: Articles) => void;
}
