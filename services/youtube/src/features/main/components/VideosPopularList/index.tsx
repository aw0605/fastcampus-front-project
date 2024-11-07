"use client";

import { useGetVideosPopularList } from "@/src/features/main/hooks/useGetVideosPopularList";
import { VisibilityLoader } from "@/src/shared/components/VisibilityLoader";
import { VideosPopularListItem } from "./ListItem";
import { flattenInfinityListData } from "@/src/shared/utils/data";
import * as s from "./style.css";

export const VideosPopularList = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetVideosPopularList({});

  const flatData = flattenInfinityListData(data);

  return (
    <>
      <section className={s.wrapper}>
        {flatData.map((item) => (
          <VideosPopularListItem key={item.videoId} video={item} />
        ))}
      </section>
      {hasNextPage && (
        <VisibilityLoader
          callback={() => {
            !isFetchingNextPage && fetchNextPage();
          }}
        />
      )}
    </>
  );
};
