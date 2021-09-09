import {Articles} from '../interfaces/NewsInterface';

/**
 * NEWS
 */
export type NewsStackParamList = {
  NewsScreen: undefined;
  NewsDetailsScreen: {article: Articles};
};
