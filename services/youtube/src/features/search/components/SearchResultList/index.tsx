"use client";

import { useSearchParams } from "next/navigation";
import { useGetSearchVideosList } from "@/src/features/search/hooks/useGetSearchVideosList";
import { SearchOrder } from "@/src/features/search/api/getSearchVideosList";
import { SearchResultListItem } from "./ListItem";
import { VisibilityLoader } from "@/src/shared/components/VisibilityLoader";
import { flattenInfinityListData } from "@/src/shared/utils/data";
import * as s from "./style.css";

export const SearchResultList = () => {
  const searchParams = useSearchParams();
  const searchQuery = {
    q: searchParams.get("q") ?? "",
    order: (searchParams.get("order") ?? "relevance") as SearchOrder,
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetSearchVideosList(searchQuery);
  const flatData = flattenInfinityListData(data);

  return (
    <>
      <section className={s.container}>
        <div className={s.wrapper}>
          {flatData.map((data) => (
            <SearchResultListItem key={data?.videoId} video={data} />
          ))}
        </div>
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
