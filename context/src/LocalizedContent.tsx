import { useI18n } from "./i18nContext";

export function LocalizedContent() {
  const { t } = useI18n();

  return <p>{t.hero}</p>;
}
