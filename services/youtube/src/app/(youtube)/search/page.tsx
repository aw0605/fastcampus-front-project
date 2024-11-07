import { Suspense } from "react";
import { SearchFilter } from "@/src/features/search/components/SearchFilter";
import { SearchResultList } from "@/src/features/search/components/SearchResultList";

export default function Search() {
  return (
    <main>
      <SearchFilter />
      <Suspense fallback={<></>}>
        <SearchResultList />
      </Suspense>
    </main>
  );
}
