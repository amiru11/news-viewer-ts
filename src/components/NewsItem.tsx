import React from "react";
import { ItemBlock, ItemThumbnail, ItemContents } from "../styles/newsItem";

interface IArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

function NewsItem({ ...article }: IArticle): JSX.Element {
  const { title, description, url, urlToImage } = article;

  return (
    <ItemBlock>
      {urlToImage && (
        <ItemThumbnail>
          <a href={url} target="_blank" rel="noopenner noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </ItemThumbnail>
      )}
      <ItemContents>
        <h2>
          <a href={url} target="_blank" rel="noopenner noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </ItemContents>
    </ItemBlock>
  );
}

export default NewsItem;
