import { Thumbnail } from "./item";

export type ListPageApiInfo = {
  nextPageToken?: string;
  prevPageToken?: string;
  totalResults: number;
};

export type VideoListItem = {
  videoId: string;
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  thumbnail: Thumbnail;
  publishedAt: string;
  publishedAtDisplayText: string;
};

export type ListResponse<T> = {
  lists: T[];
} & ListPageApiInfo;
