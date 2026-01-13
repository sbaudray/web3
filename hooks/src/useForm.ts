import { useState, useEffect } from "react";

export function useForm<T extends Record<string, string>>(
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
