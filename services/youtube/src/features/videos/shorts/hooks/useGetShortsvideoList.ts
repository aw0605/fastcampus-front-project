import {
  InfiniteData,
  UseSuspenseInfiniteQueryResult,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import {
  getShortsVideosList,
  GetShortsVideosListResponse,
} from "../api/getShortsVideosList";

type Params = {
  initPageToken?: string;
};

export const useGetShortsVideosList = ({
  initPageToken,
}: Params): UseSuspenseInfiniteQueryResult<
  InfiniteData<GetShortsVideosListResponse>,
  Error
> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["shorts", initPageToken],
    queryFn: async ({ pageParam = initPageToken }) => {
      return await getShortsVideosList({ pageToken: pageParam });
    },
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  });
};
