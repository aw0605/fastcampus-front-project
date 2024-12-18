"use client";

import { Suspense, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGetVideosDetail } from "@/src/features/videos/detail/hooks/useGetVideoDetail";
import { VideoDetailPageParams } from "@/src/features/videos/detail/types";
import { useHandleInvalidShortsVideoType } from "../../hooks/useHandleInvalidShortsvideoType";
import { VideoDetailCommentList } from "@/src/shared/components/VideoDetailCommentList";
import { ShortsPlayer, ShortsPlayerConfig } from "../ShortsPlayer";
import { ButtonItem } from "./ButtonItem";
import clsx from "clsx";
import * as s from "./style.css";

type Props = VideoDetailPageParams["params"] & ShortsPlayerConfig;

export const ShortsVideoDetail = ({ videoId, autoPlay }: Props) => {
  const {
    data: { detail: videoDetail },
  } = useGetVideosDetail({ videoId });

  useHandleInvalidShortsVideoType({ videoId });

  const [showComment, setShowComment] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.videoWrapper}>
          <div className={s.buttonWrapper}>
            <ButtonItem
              buttonText="댓글"
              label={videoDetail.commentCountDisplayText}
              onClick={() => {
                setShowComment(!showComment);
              }}
            />
          </div>
          <ShortsPlayer videoId={videoId} autoPlay={autoPlay} />
        </div>

        <AnimatePresence initial={false}>
          {showComment && (
            <motion.div
              initial="collapsed"
              exit="collapsed"
              animate="open"
              variants={{
                open: { width: "auto" },
                collapsed: { width: 0 },
              }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div className={clsx([s.commentWrapper, "swiper-no-mousewheel"])}>
                <Suspense>
                  <VideoDetailCommentList videoId={videoId} />
                </Suspense>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
