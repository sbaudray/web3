import { createContext, useState, useContext, type ReactNode } from "react";

type Language = "en" | "fr";

const translations = {
  fr: {
    hello: "Bonjour !",
    switch: "Passer en anglais",
    hero: "Le contexte ne doit pas être utilisé à la légère",
  },
  en: {
    hello: "Hello !",
    switch: "Switch to French",
    hero: "Context should not be used lightly",
  },
};

interface I18nContextType {
  language: Language;
  t: typeof translations.fr;
  toggleLanguage: () => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  function toggleLanguage() {
    setLanguage((language) => (language === "en" ? "fr" : "en"));
  }

  return (
    <I18nContext.Provider
      value={{
        language,
        t: translations[language],
        toggleLanguage,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
