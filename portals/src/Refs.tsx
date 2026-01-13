import { useEffect, useRef } from "react";

export function FocusInput() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return <input ref={ref} />;
}
