import { useState } from 'react';
import { AppButton, AppCard, AppScreen, AppText, FeedbackBanner } from '../ui/primitives';
import { useLanguage } from '../ui/LanguageContext';

export function SettingsScreen() {
  const { language, setLanguage, t } = useLanguage();
  const [message, setMessage] = useState('');
  return <AppScreen>
    <AppText title>{t('settings')}</AppText>
    <AppCard>
      <AppText title>{t('language')}</AppText>
      <AppButton label={t('english') + (language === 'en' ? ' ✓' : '')} variant="secondary" onPress={() => setLanguage('en')} />
      <AppButton label={t('polish') + (language === 'pl' ? ' ✓' : '')} variant="secondary" onPress={() => setLanguage('pl')} />
    </AppCard>
    <AppCard>
      <AppText title>{t('biometrics')}</AppText>
      <AppText>{t('biometricUnavailable')} This template provides an opt-in adapter; connect a native provider in your app.</AppText>
      <AppButton label={t('check')} disabled onPress={() => setMessage(t('biometricUnavailable'))} />
    </AppCard>
    <AppCard>
      <AppText title>{t('about')}</AppText>
      <AppText>{t('aboutText')}</AppText>
      <AppText>Expo · React Native · TypeScript</AppText>
      <AppText>{t('privacy')}</AppText>
    </AppCard>
    {message ? <FeedbackBanner message={message} /> : null}
  </AppScreen>;
}
