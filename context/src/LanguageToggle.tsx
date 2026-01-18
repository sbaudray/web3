import { useI18n } from "./I18nContext";

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useI18n();

  return (
    <div
      style={{
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <p>Langue: {language}</p>
      <button onClick={toggleLanguage} style={{ padding: ".5em" }}>
        {t.switch}
      </button>
    </div>
  );
}
