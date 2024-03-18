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

  const postData = async () => {
    const response = await fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Hello from the frontend",
        username: "alex",
        password: "123",
      }),
    });
  };

  const putData = async () => {
    const response = await fetch("http://localhost:3001", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Hello from the frontend",
        username: "alex",
        password: "123",
      }),
    });

    const data = await response.json();
    setData(data.message);
  };

  const deleteData = async () => {
    const response = await fetch("http://localhost:3001", {
      method: "DELETE",
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
      <button onClick={postData}>Send Data</button>
      <button onClick={putData}>Overwrite Data</button>
      <button onClick={deleteData}>Delete Data</button>
    </div>
  );
};

export default App;
