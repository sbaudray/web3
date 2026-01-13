import { useRef } from "react";
import { useClickOutside } from "./useClickOutside";
import { createPortal } from "react-dom";

interface Props {
  isOpen: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
}

export function Modal({ children, isOpen, onDismiss }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => onDismiss());

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="modal_overlay">
      <div className="modal" ref={ref}>
        <div className="modal_header">
          <button className="modal_close_button" onClick={onDismiss}>
            <span className="modal_close_icon">+</span>
          </button>
        </div>
        <div className="modal_body">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
}
