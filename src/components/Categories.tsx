import * as React from "react";
import { CategoriesBlock, Category } from "../styles/categories";
import { categories } from "../enum";

function Categories(): JSX.Element {
  return (
    <CategoriesBlock>
      {categories.map(category => (
        <Category
          key={category.name}
          activeClassName="active"
          exact={category.name === "all"}
          to={category.name === "all" ? "/" : `/${category.name}`}
        >
          {category.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
}

export default Categories;
