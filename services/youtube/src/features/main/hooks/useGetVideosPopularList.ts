import {
  InfiniteData,
  useSuspenseInfiniteQuery,
  UseSuspenseInfiniteQueryResult,
} from "@tanstack/react-query";
import {
  getVideosPopularList,
  getVideosPopularListUrl,
  GetVideosPopularListRequestParams,
  GetVideosPopularListResponse,
} from "@/src/features/main/api/getVideoPopularList";

type Params = Pick<GetVideosPopularListRequestParams, "maxResults"> & {
  initPageToken?: string;
};

export const useGetVideosPopularList = ({
  maxResults,
  initPageToken,
}: Params): UseSuspenseInfiniteQueryResult<
  InfiniteData<GetVideosPopularListResponse>,
  Error
> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["videos", getVideosPopularListUrl, maxResults, initPageToken],
    queryFn: async ({ pageParam = initPageToken }) => {
      return await getVideosPopularList({ maxResults, pageToken: pageParam });
    },
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
    getPreviousPageParam: (firstpage) => firstpage.prevPageToken,
  });
};
