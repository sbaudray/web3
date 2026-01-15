import { useTheme } from "./ThemeContext";

export function ThemedBox() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: "2em",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      The current theme is {theme}
    </div>
  );
}
