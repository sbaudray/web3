import { useWindowSize } from "./useWindowSize";

export function WindowSizeDisplay() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1 style={{ fontSize: 24 }}> Window Size</h1>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
}
