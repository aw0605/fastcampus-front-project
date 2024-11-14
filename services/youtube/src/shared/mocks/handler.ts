import { HttpHandler } from "msw";
import { getMockVideosPopularList } from "@/src/features/main/api/getVideoPopularList.mock";
import { getMockSearchVideosList } from "@/src/features/search/api/getSearchVideosList.mock";
import { getMockVideosDetail } from "@/src/features/videos/detail/api/getVideosDetail.mock";
import { getMockVideosDetailCommentList } from "@/src/features/videos/detail/api/getVideosDetailCommentList.mock";

export const handlers: HttpHandler[] = [
  getMockVideosPopularList,
  getMockSearchVideosList,
  getMockVideosDetail,
  getMockVideosDetailCommentList,
];
