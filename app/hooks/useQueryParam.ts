"use client"

import { useRouter, useSearchParams } from "next/navigation";

const useQueryParam = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setQueryParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value); // add or update param
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const removeQueryParam = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const getQueryParam = (key: string) => {
    return searchParams.get(key);
  };

  return { setQueryParam, removeQueryParam, getQueryParam };
};

export default useQueryParam;
