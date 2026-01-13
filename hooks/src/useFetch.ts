import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function doFetch() {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error(`Erreur: ${res.status}`);
        }

        const json = await res.json();

        setData(json);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        setError(error instanceof Error ? error.message : `Erreur inconnue`);
      } finally {
        setIsLoading(false);
      }
    }

    doFetch();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    error,
    isLoading,
  };
}
