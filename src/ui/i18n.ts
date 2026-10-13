export type Language = 'en' | 'pl';
export const messages = {
  en: { settings: 'Settings', about: 'About', language: 'Language', english: 'English', polish: 'Polski', biometrics: 'Biometric check', biometricUnavailable: 'Biometrics are unavailable on this device.', biometricSuccess: 'Identity verified.', biometricFailed: 'Verification was cancelled or unsuccessful.', check: 'Check biometrics', aboutText: 'Reusable mobile components showcase.', privacy: 'This demonstration does not collect or send personal data.' },
  pl: { settings: 'Ustawienia', about: 'O aplikacji', language: 'Język', english: 'English', polish: 'Polski', biometrics: 'Weryfikacja biometryczna', biometricUnavailable: 'Biometria jest niedostępna na tym urządzeniu.', biometricSuccess: 'Tożsamość potwierdzona.', biometricFailed: 'Weryfikacja anulowana lub nieudana.', check: 'Sprawdź biometrię', aboutText: 'Przykładowa aplikacja z komponentami mobilnymi.', privacy: 'Ta demonstracja nie zbiera ani nie wysyła danych osobowych.' }
} as const;
export type TranslationKey = keyof typeof messages.en;
export const translate = (language: Language, key: TranslationKey): string => messages[language][key];
