import { useEffect, useRef, useState } from "react";

export function ResizableDiv() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ height: number; width: number } | null>(
    null
  );

  useEffect(() => {
    function listener() {
      if (ref.current) {
        setSize({
          height: ref.current.getBoundingClientRect().height,
          width: ref.current.getBoundingClientRect().width,
        });
      }
    }

    listener();

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "20vw",
        height: "20vh",
        background: "white",
        color: "black",
      }}
    >
      {size ? (
        <>
          <p>{size.width}</p>
          <p>{size.height}</p>
        </>
      ) : null}
    </div>
  );
}
