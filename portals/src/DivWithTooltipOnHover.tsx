import { useState } from "react";
import { Tooltip } from "./Tooltip";

export function DivWithTooltipOnHover() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    setCoords({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <div>
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onMouseMove={handleMouseMove}
      >
        HOVER ME
      </div>
      {showTooltip ? (
        <Tooltip x={coords.x} y={coords.y} text="Super tooltip" />
      ) : null}
    </div>
  );
}
