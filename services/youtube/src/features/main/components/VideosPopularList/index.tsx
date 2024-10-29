"use client";

import { useGetVideosPopularList } from "@/src/features/main/hooks/useGetVideosPopularList";
import * as s from "./index.css";

export const VideosPopularList = () => {
  const { data } = useGetVideosPopularList({});

  const flatData = data.pages.map((page) => page?.lists ?? []).flat();

  return (
    <section className={s.wrapper}>
      {flatData.map((item) => (
        <div key={item.videoId} className={s.item}>
          <div className={s.itemWrapper} />
        </div>
      ))}
    </section>
  );
};
