"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { flattenInfinityListData } from "@/src/shared/utils/data";
import { useGetShortsVideosList } from "../../hooks/useGetShortsvideoList";

export const RedirectRandomShortsVideo = () => {
  const { data } = useGetShortsVideosList({});
  const flatData = flattenInfinityListData(data);

  const router = useRouter();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * flatData.length);
    const randomVideoId = flatData[randomNumber].videoId;
    router.replace(`/videos/shorts/${randomVideoId}?videoType=short`);
  });

  return <></>;
};
