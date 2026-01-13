import { createPortal } from "react-dom";

interface Props {
  text: string;
  x: number;
  y: number;
}

export function Tooltip({ text, x, y }: Props) {
  return createPortal(
    <div
      className="tooltip"
      style={{
        position: "absolute",
        top: y + 10,
        left: x + 10,
      }}
    >
      {text}
    </div>,
    document.getElementById("tooltip-root")!
  );
}
