import React, { useEffect, useState } from "react";
import axios from "axios";

interface dataProp {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const [data, setData] = useState([]);

  async function fetch() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setData(res.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {data.map((item: dataProp) => {
        return (
          <>
            <h1>
              {item.id} - {item.title}
            </h1>
          </>
        );
      })}
    </div>
  );
};

export default App;

