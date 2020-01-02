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
