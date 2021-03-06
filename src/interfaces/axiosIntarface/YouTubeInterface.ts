export interface YouTubeResponce {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Items[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Items {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface Thumbnails {
  default: Size;
  medium: Size;
  high: Size;
}

export interface Size {
  url: string;
  width: number;
  height: number;
}
