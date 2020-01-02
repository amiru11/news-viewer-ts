import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListBlock } from "../styles/newsList";
import NewsItem from "./NewsItem";
import { IArticle } from "./types";
import { NEWS_API_KEY } from "../config";

function NewsList(): JSX.Element {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${NEWS_API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []); // componentDidMount, componentDidUpdate를 해주는 역할

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
