import { Suspense } from "react";
import { RedirectRandomShortsVideo } from "@/src/features/videos/shorts/components/RedirectRandomShortsVideo";

export default function ShortsVideosPage() {
  return (
    <main>
      <Suspense fallback={<div></div>}>
        <RedirectRandomShortsVideo />
      </Suspense>
    </main>
  );
}
