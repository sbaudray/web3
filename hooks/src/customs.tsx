import { useEffect, useState } from "react";

// --------
// useFetch
// --------

function useFetch<T>(url: string) {
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
  }, [url]);

  return {
    data,
    error,
    isLoading,
  };
}

// --------
// useWindowSize
// --------

function useWindowSize() {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // best way now to use useSyncExternalStore
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

// --------
// useForm
// --------

function useForm<T extends Record<string, string>>(
  initialState: T,
  onSubmit: (values: T) => void
) {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<Record<keyof T, string | null>>(
    Object.fromEntries(
      Object.keys(initialState).map((key) => [key, null])
    ) as Record<keyof T, string | null>
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setErrors((errors) => ({
      ...errors,
      [name]: null,
    }));
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  }

  function validate() {
    const newErrors: Record<string, string> = {};

    for (const [key, value] of Object.entries(values)) {
      if (value.trim() === "") {
        newErrors[key] = "missing";
      }
    }

    setErrors((errors) => ({ ...errors, ...newErrors }));

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) {
      return;
    }

    onSubmit(values);
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}

export function MyForm() {
  const initialState = {
    username: "",
    password: "",
  } as const;

  function onSubmit(values: typeof initialState) {
    console.log(`User submitted those values: ${JSON.stringify(values)}`);
  }

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialState,
    onSubmit
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={errors.username ? "error" : undefined}
        name="username"
        placeholder="username"
        value={values.username}
        onChange={handleChange}
      />
      <input
        className={errors.password ? "error" : undefined}
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
}
