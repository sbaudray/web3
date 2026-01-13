import { useState } from "react";

export function MyComponent({ text = "Hello" }) {
  return <div>{text}</div>;
}

export function MyComponent(props) {
  return <div>{props.text ?? "Hello"}</div>;
}

function Post({ post: { id, title, highlight }, onClick }) {
  return (
    <li
      onClick={() => onClick({ id })}
      className={highlight ? "highlight" : undefined}
    >
      {title}
    </li>
  );
}

export function PostIndex() {
  const [posts, setPosts] = useState({
    1: { id: 1, title: "Article 1", highlight: true },
    2: { id: 2, title: "Article 2" },
  });

  function handlePostClick({ id }) {
    setPosts((posts) => {
      const current = posts[id];

      return {
        ...posts,
        [id]: { ...current, highlight: !current.highlight },
      };
    });
  }

  return (
    <ul>
      {Object.entries(posts).map(([id, post]) => {
        return <Post key={id} post={post} onClick={handlePostClick} />;
      })}
    </ul>
  );
}
