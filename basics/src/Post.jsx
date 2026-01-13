export function Post({ post: { id, title, highlight }, onClick }) {
  return (
    <li
      onClick={() => onClick({ id })}
      className={highlight ? "highlight" : undefined}
    >
      {title}
    </li>
  );
}
