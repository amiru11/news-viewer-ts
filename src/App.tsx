import React, { useState, useCallback } from "react";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
  // const [category, setCategory] = useState<string>("all");
  // const onSelect = useCallback(({ target }) => {
  //   const { category } = target.dataset;
  //   if (category) setCategory(category);
  // }, []); // 불필요한 렌더링을 방지하기 위해 (예로 shouldComponentUpdate를 사용하여) 참조의 동일성에 의존적인 최적화된 자식 컴포넌트에 콜백을 전달할 때 유용

  return <Route path="/:category?" component={NewsPage} />;
}

export default App;
