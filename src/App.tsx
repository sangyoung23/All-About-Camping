import React, { useEffect, useState } from "react";
import "./App.css";

import { ApiTypes } from "./types/ApiTypes";

const App = () => {
  const [data, setData] = useState<ApiTypes[]>([]);

  const getCampData = async () => {
    const json = await fetch(
      `https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=100&pageNo=10&MobileOS=ETC&MobileApp=Camping&serviceKey=uNWo3EbJWQB5UHsCd5Lw9uejVQBHhwXTcrk6OYCywhJr3qaefuWtSqkq%2BO2OR68uQ9TakmIqr7E7YaqXoOEe6w%3D%3D&_type=json`
    )
      .then((response) => response.json())
      .catch((err) => console.log(err));

    setData(json.response.body.items.item);
  };

  useEffect(() => {
    getCampData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1>All-About-Camping</h1>
    </div>
  );
};

export default App;
