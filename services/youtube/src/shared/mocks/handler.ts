import { HttpHandler } from "msw";
import { getMockVideosPopularList } from "@/src/features/main/api/getVideoPopularList.mock";
import { getMockSearchVideosList } from "@/src/features/search/api/getSearchVideosList.mock";

export const handlers: HttpHandler[] = [
  getMockVideosPopularList,
  getMockSearchVideosList,
];
