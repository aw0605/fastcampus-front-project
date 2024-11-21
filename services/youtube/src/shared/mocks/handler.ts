import { HttpHandler } from "msw";
import { getMockVideosPopularList } from "@/src/features/main/api/getVideoPopularList.mock";
import { getMockSearchVideosList } from "@/src/features/search/api/getSearchVideosList.mock";
import { getMockVideosDetail } from "../api/youtube/client/videoDetail/getVideoDetail.mock";
import { getMockVideosDetailCommentList } from "@/src/shared/api/youtube/client/videoDetail/getVideosDetailCommentList.mock";
import { getMockShrotsVideosList } from "@/src/features/videos/shorts/api/getShortsVideosList.mock";

export const handlers: HttpHandler[] = [
  getMockVideosPopularList,
  getMockSearchVideosList,
  getMockVideosDetail,
  getMockVideosDetailCommentList,
  getMockShrotsVideosList,
];
