import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await fetch("http://localhost:3001", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setData(data.message);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Frontend Message</h1>
      <p>{data}</p>
    </div>
  );
};

export default App;
