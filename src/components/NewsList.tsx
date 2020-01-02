import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListBlock } from "../styles/newsList";
import NewsItem from "./NewsItem";
import { IArticle, ICategory } from "./types";
import { NEWS_API_KEY } from "../config";

function NewsList({ category }: ICategory): JSX.Element {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // async를 사용하기 위한 함수 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${NEWS_API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]); // componentDidMount, componentDidUpdate를 해주는 역할

  // 대기 중일 때,
  if (loading) {
    return <ListBlock>로딩 중...</ListBlock>;
  }
  if (!articles) {
    return <></>;
  }

  return (
    <ListBlock>
      {articles.map(article => (
        <NewsItem {...article} key={article.url} />
      ))}
    </ListBlock>
  );
}

export default NewsList;
