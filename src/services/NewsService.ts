import {AxiosInstance} from 'axios';
import {axiosNewsInstance} from '../interfaces/axiosIntarface/AxiosInterface';
import {NewsItem} from '../interfaces/axiosIntarface/NewsInterface';

class NewsService {
  constructor(
    private readonly NEWS_API: string,
    private readonly asios: AxiosInstance,
  ) {}

  public async getNewsDate(countryCode: string, category: string) {
    const url = `${this.NEWS_API}?country=${countryCode}&category=${category}&apiKey=ca9dbb585bf54ea6a04a51bc7b48b2df`;
    try {
      const response = await this.asios.get<NewsItem>(url);

      if (response.data) {
        return response.data.articles;
      }
    } catch (err) {
      throw Error();
    }
  }
}

export default new NewsService(
  'https://newsapi.org/v2/top-headlines',
  axiosNewsInstance,
);
