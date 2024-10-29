import { Suspense } from "react";
import { VideosPopularList } from "@/src/features/main/components/VideosPopularList";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>🤔</div>}>
        <VideosPopularList />
      </Suspense>
    </main>
  );
}
