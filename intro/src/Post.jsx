import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { showPost } from "./api";

export function Post() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    showPost({ postId })
      .then((post) => {
        setPost(post);
      })
      .catch((_error) => {
        setError("Impossible de charger l'article");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return null;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
