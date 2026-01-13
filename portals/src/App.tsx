import { useState } from "react";
import "./App.css";
import { Modal } from "./Modal";
import { Tooltip } from "./Tooltip";
import { UserTable } from "./UserTable";
import { FocusInput } from "./Refs";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [showTooltip, setShowTooltip] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    setCoords({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <>
      <h1 style={{ fontSize: 24 }}>Modal</h1>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>
      <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        <div>Hello World</div>
      </Modal>

      <hr style={{ margin: 16 }} />

      <h1 style={{ fontSize: 24 }}>Tooltip</h1>
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

      <hr style={{ margin: 16 }} />

      <h1 style={{ fontSize: 24 }}>Fragment List</h1>
      <UserTable />

      <hr style={{ margin: 16 }} />

      <h1 style={{ fontSize: 24 }}>Input Focus</h1>
      <FocusInput />
    </>
  );
}

export default App;
