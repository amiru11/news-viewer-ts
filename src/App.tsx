import React, { useState, useCallback } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

function App() {
  const [category, setCategory] = useState<string>("all");
  const onSelect = useCallback(({ target }) => {
    const { category } = target.dataset;
    if (category) setCategory(category);
  }, []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
