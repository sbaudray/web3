import { useI18n } from "./I18nContext";

export function LocalizedContent() {
  const { t } = useI18n();

  return <p>{t.hero}</p>;
}
