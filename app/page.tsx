"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import Container from "./components/Container";
import Filters from "./components/Filters";
import dogs from "@/app/data/dogs.json";
import DogCard from "./components/DogCard/DogCard";
import Pagination from "./components/Pagination";
import RecentArticles from "./components/RecentArticles";
import { useModal } from "./hooks/useModal";
import useQueryParam from "./hooks/useQueryParam";

const RESULTS_PER_PAGE = 12;

export default function Home() {
  const { openModal } = useModal();
  const { setQueryParam } = useQueryParam();
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(dogs.length / RESULTS_PER_PAGE);
  const start = (page - 1) * RESULTS_PER_PAGE;
  const end = start + RESULTS_PER_PAGE;
  const results = dogs.slice(start, end);

  useEffect(() => {
    gridRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [page]);

  return (
    <Suspense>
      <main>
        <Container ref={gridRef} className="mt-[69px] mb-[100px]">
          <Filters />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] gap-y-[30px] my-[30px]">
            {results.map((result) => (
              <DogCard
                key={`dog-${result.id}`}
                dog={{
                  id: result.id,
                  url: `/mascotas/${result.id}`,
                  image: result.picture,
                  name: result.name,
                  years: result.years,
                  gender: result.gender,
                  breed: result.breed,
                  location: result.location,
                }}
                onClick={() => {
                  setQueryParam("id", result.id.toString());
                  openModal("petDetails");
                }}
              />
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            current={page}
            onPrev={() => {
              setPage((prevPage) => Math.max(prevPage - 1, 1));
            }}
            onNext={() => {
              setPage((prevPage) => Math.min(prevPage + 1, totalPages));
            }}
            onPageClick={(page) => {
              setPage(page);
            }}
            className="justify-end"
          />
        </Container>
        <RecentArticles />
      </main>
    </Suspense>
  );
}
