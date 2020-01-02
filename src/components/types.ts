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
  category: string;
  onSelect: ({ target }: React.MouseEvent<HTMLDivElement>) => void;
}
