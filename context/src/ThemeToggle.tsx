import { useTheme } from "./ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      style={{
        cursor: "pointer",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
      onClick={toggleTheme}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
