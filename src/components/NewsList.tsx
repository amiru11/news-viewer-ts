import React from "react";
import { ListBlock } from "../styles/newsList";
import NewsItem from "./NewsItem";

interface IArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const sampleArticle: IArticle = {
  title: "title",
  description: "description",
  url: "naver.com",
  urlToImage: "https://via.placeholder.com/160"
};

function NewsList(): JSX.Element {
  return (
    <ListBlock>
      <NewsItem {...sampleArticle}></NewsItem>
      <NewsItem {...sampleArticle}></NewsItem>
      <NewsItem {...sampleArticle}></NewsItem>
      <NewsItem {...sampleArticle}></NewsItem>
    </ListBlock>
  );
}

export default NewsList;
