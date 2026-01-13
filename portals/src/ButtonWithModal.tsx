import { useState } from "react";
import { Modal } from "./Modal";

export function ButtonWithModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>
      <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        <div>Hello World</div>
      </Modal>
    </div>
  );
}
