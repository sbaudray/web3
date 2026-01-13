import { useForm } from "./useForm";

export function FormUsingHook() {
  const initialState = {
    username: "",
    password: "",
  } as const;

  function onSubmit(values: Record<keyof typeof initialState, string>) {
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
