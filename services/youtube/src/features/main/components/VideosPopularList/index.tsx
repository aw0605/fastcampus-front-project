"use client";

import { useEffect } from "react";
import { vars } from "@fastcampus/themes";
import { useGetVideosPopularList } from "@/src/features/main/hooks/useGetVideosPopularList";

export const VideosPopularList = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useGetVideosPopularList(
    {},
  );

  useEffect(() => {
    setTimeout(() => {
      fetchNextPage();
    }, 2000);
  }, []);

  return (
    <section style={{ color: vars.colors.$scale.gray[900] }}>
      <h2>목록</h2>
      <br />
      <p>fetching: {isFetchingNextPage ? "true" : "false"}</p>
      <br />
      <p>{data.pages?.[0].lists?.[0].title}</p>
    </section>
  );
};
