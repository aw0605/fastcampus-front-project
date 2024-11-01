import { HttpHandler } from "msw";
import { getMockVideosPopularList } from "@/src/features/main/api/getVideoPopularList.mock";

export const handlers: HttpHandler[] = [getMockVideosPopularList];
