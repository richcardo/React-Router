import { useState } from "react";
import useFetch from "../Hooks/useFetch";
export default function Data() {
  const [url, setUrl] = useState();
  const data = useFetch(url, url);

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900">Data</h1>
      <div className="buttons">
        <button
          className="btn btn-primary"
          onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}
        >
          Post
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}
        >
          Users
        </button>
      </div>
      <ul className="list text-blue-900 rounded-box shadow-md">
        {data &&
          data.map((item) => {
            return (
              <li className="list-row" key={item.id}>
                {item.title || item.name}
              </li>
            );
          })}
      </ul>
    </>
  );
}
