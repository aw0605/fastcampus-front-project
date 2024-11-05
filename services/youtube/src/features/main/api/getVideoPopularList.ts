import {
  ListPageApiInfo,
  VideoListItem,
} from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import { API_BASE_URL } from "@/src/shared/api/constants";
import queryString from "query-string";

export type GetVideosPopularListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>;

export type PopularListItem = {
  viewCount: number;
  viewCountDisplayText: string;
} & VideoListItem;

export type GetVideosPopularListResponse = {
  lists: PopularListItem[];
} & ListPageApiInfo;

export const getVideosPopularListUrl = `${API_BASE_URL}/api/videos/popular-list`;

export const getVideosPopularList = async (
  params: GetVideosPopularListRequestParams,
): Promise<GetVideosPopularListResponse> => {
  const queryParams = queryString.stringify(params);

  const url = `${getVideosPopularListUrl}?${queryParams}`;

  const response = await fetch(url);

  return await response.json();
};
