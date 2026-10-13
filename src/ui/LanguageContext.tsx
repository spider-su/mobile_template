import { createContext, useContext, useState, type ReactNode } from 'react';
import { translate, type Language, type TranslationKey } from './i18n';
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string };
const Context = createContext<LanguageContextValue | null>(null);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  return <Context.Provider value={{ language, setLanguage, t: key => translate(language, key) }}>{children}</Context.Provider>;
}
export function useLanguage() {
  const value = useContext(Context);
  if (!value) throw new Error('LanguageProvider is required');
  return value;
}
