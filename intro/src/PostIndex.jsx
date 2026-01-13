import { useEffect, useState } from "react";
import { Link } from "react-router";
import { indexPosts } from "./api";

export function PostIndex() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    indexPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  // useEffect(() => {
  //   const listener = () => {
  //     console.log("hello");
  //   };

  //   window.addEventListener("click");

  //   return () => {
  //     window.removeEventListener("click", listener);
  //   };
  // }, []);

  if (!posts.length) {
    return <p>Aucun post</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
