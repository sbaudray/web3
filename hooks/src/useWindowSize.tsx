import { useEffect, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // best way now to use useSyncExternalStore
  // https://react.dev/reference/react/useSyncExternalStore#subscribing-to-a-browser-api
  useEffect(() => {
    function listener() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return size;
}
