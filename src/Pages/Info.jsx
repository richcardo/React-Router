import { Link, useLoaderData } from "react-router";
export default function Info() {
  const posts = useLoaderData();
  return (
    <>
      <div className="container">
        <h1>Info</h1>
      </div>
      <ul>
        {posts.map((post) => {
          return (
            <li>
              {post.title}{" "}
              <Link className="link" to={`/info/details/${post.id}`}>Read More</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
