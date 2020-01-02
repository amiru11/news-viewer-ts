import React from "react";
import { CategoriesBlock, Category } from "../styles/categories";
import { categories } from "../enum";
import { ICategories } from "./types";

function Categories({ ...props }: ICategories): JSX.Element {
  return (
    <CategoriesBlock onClick={props.onSelect}>
      {categories.map(category => (
        <Category
          key={category.name}
          data-category={category.name}
          active={props.category === category.name}
        >
          {category.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
}

export default Categories;
