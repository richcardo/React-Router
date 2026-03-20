import { useState } from "react";
import useFetch from "../Hooks/useFetch";
export default function Data() {
  const [url, setUrl] = useState();
  const data = useFetch(url, url);

  return (
    <>
      <h1>Data</h1>
      <div className="buttons">
        <button
          onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}
        >
          Post
        </button>
        <button
          onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}
        >
          Users
        </button>
      </div>
      <ul>
        {data &&
          data.map((item) => {
            return <li key={item.id}>{item.title || item.name}</li>;
          })}
      </ul>
    </>
  );
}
