"use client";

import { useState } from "react";
import Container from "../components/Container";
import articles from "@/app/data/blog.json";
import Banner from "../components/Banner";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";

const RESULTS_PER_PAGE = 11;

const Blog = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(articles.length / RESULTS_PER_PAGE);
  const start = (page - 1) * RESULTS_PER_PAGE;
  const end = start + RESULTS_PER_PAGE;
  const results = articles.slice(start, end);

  return (
    <Container className="mt-[73px]">
      <h2 className="text-lavander heading mb-[50px]">
        ¿Primera vez adoptando? Lee esto
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[50px]">
        <Banner />
        {results.map((result) => (
          <BlogCard
            key={result.id}
            image={result.image}
            title={result.title}
            description={result.description}
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
        className="justify-center mt-[50px]"
      />
    </Container>
  );
};

export default Blog;
