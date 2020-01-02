import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

interface IMatch extends RouteComponentProps<IParams> {}
interface IParams {
  category: string | undefined;
}

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
