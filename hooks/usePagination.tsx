"use client";

import React, { useState } from "react";

export default function usePagination(data: Array<any>, itemsPerPage: number) {
  const [currentpage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentpage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function prev() {
    setCurrentPage((currentpage) => Math.min(currentpage + 1, maxPage));
  }

  function next() {
    setCurrentPage((currentpage) => Math.min(currentpage + 1, 1));
  }

  function jump(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  }

  return { currentData, prev, next, jump, currentpage, maxPage };
}
