import { useEffect, useRef } from "react";

export function InputWithAutoFocus() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return <input ref={ref} />;
}
