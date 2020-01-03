import * as React from "react";
import axios from "axios";
import { ListBlock } from "../styles/newsList";
import NewsItem from "./NewsItem";
import { IArticles, ICategory } from "./types";
import { NEWS_API_KEY } from "../config";
import usePromise from "../lib/usePromise";

function NewsList({ category }: ICategory): JSX.Element {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${NEWS_API_KEY}`
    ); // 이 부분이 promiseCreator 파라미터 부분
  }, [category]);
  // const [articles, setArticles] = useState<IArticle[]>([]);

  // 대기 중일 때,
  if (loading) return <ListBlock>로딩 중...</ListBlock>;
  if (!response) return <></>;
  if (error) return <ListBlock>에러!</ListBlock>;

  const { articles }: IArticles = response.data;

  return (
    <ListBlock>
      {articles.map(article => (
        <NewsItem {...article} key={article.url} />
      ))}
    </ListBlock>
  );
}

export default NewsList;
