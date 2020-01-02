import * as React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { IMatch } from "../components/types";

function NewsPage({ match }: IMatch) {
  const category = match.params.category || "all";
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}

export default NewsPage;
