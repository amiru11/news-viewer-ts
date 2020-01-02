import { RouteComponentProps } from "react-router-dom";

export interface IArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  key: number;
}

export interface IArticles {
  articles: IArticle[];
}

export interface ICategory {
  category: string;
}

export interface ICategories {
  // category: string;
  onSelect: ({ target }: React.MouseEvent<HTMLDivElement>) => void | undefined;
}

export interface IMatch extends RouteComponentProps<IParams> {}
export interface IParams {
  category: string | undefined;
}
