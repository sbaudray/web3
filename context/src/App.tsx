import "./App.css";
import { AuthProvider } from "./AuthContext";
import { AuthToggle } from "./AuthToggle";
import { LanguageToggle } from "./LanguageToggle";
import { LocalizedContent } from "./LocalizedContent";
import { ProtectedRoute } from "./ProtectedRoute";
import { Separator } from "./Separator";
import { ThemeProvider } from "./ThemeContext";
import { ThemeToggle } from "./ThemeToggle";
import { ThemedBox } from "./ThemedBox";
import { I18nProvider } from "./I18nContext";

function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <AuthProvider>
          <h2 style={{ fontSize: 24 }}>Theme Context</h2>
          <div style={{ padding: "2em", display: "flex", gap: "1em" }}>
            <ThemeToggle />
            <ThemedBox />
          </div>

          <Separator />

          <h2 style={{ fontSize: 24 }}>Auth Context</h2>
          <AuthToggle />
          <ProtectedRoute>
            <div>This is only visible when isLoggedIn is true !</div>
          </ProtectedRoute>

          <Separator />

          <h2 style={{ fontSize: 24 }}>I18n Context</h2>
          <LocalizedContent />
          <LanguageToggle />
        </AuthProvider>
      </ThemeProvider>
    </I18nProvider>
  );
}

export default App;
