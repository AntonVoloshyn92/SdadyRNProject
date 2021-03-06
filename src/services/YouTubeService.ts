import {AxiosInstance} from 'axios';
import {axiosYouTubeInstance} from '../interfaces/axiosIntarface/AxiosInterface';
import {YouTubeResponce} from '../interfaces/axiosIntarface/YouTubeInterface';

class YouTubeService {
  constructor(
    private readonly YOUTUBE_API: string,
    private readonly axios: AxiosInstance,
  ) {}

  public async getVideoListDate(
    snippet: string,
    maxResults: number,
    type: string,
  ) {
    const url = `${this.YOUTUBE_API}?part=${snippet}&maxResults=${maxResults}&q=songs&type=${type}&key=AIzaSyBWaen7Bi6bhBnTqdmLG4PkqcfexEjk2uU`;
    try {
      const responce = await this.axios.get<YouTubeResponce>(url);
      if (responce.data) {
        return responce.data.items;
      }
    } catch (err) {
      throw Error();
    }
  }
}

export default new YouTubeService(
  'https://www.googleapis.com/youtube/v3/search',
  axiosYouTubeInstance,
);
