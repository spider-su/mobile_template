import { AppCard, AppScreen, AppText, FeedbackBanner } from '../ui/primitives';

export function SettingsScreen() {
  return <AppScreen>
    <AppText title>About the UI Kit</AppText>
    <AppCard>
      <AppText>Expo + React Native + TypeScript</AppText>
      <AppText>Reusable UI components live in src/ui. The Home tab demonstrates buttons, loading, forms, confirmation and feedback.</AppText>
    </AppCard>
    <FeedbackBanner message="This is a demonstration app. Form values are not persisted, and no external notifications are sent." />
    <AppCard>
      <AppText title>Adopting components</AppText>
      <AppText>Import individual components from src/ui/primitives. Theme tokens live in src/ui/theme. Form rules live in src/ui/validation and should be replaced with product-specific rules.</AppText>
    </AppCard>
  </AppScreen>;
}
