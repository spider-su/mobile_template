# Mobile UI Kit showcase

Launch with `npm ci && npm start`, then open the Home and Settings tabs. Home demonstrates buttons, an activity spinner, an accessible validation form, a switch, a confirmation dialog, native alert and in-app feedback.

## Reuse

- `src/ui/theme.ts`: light/dark palette and spacing.
- `src/ui/primitives.tsx`: screen, card, text, buttons, fields, toggle, spinner, banner, dialog.
- `src/ui/validation.ts`: example pure form validation; replace domain rules when adopting.
- `src/ui/notifications.ts`: optional interface for a product-owned OS notification implementation. The template intentionally does not install or configure expo-notifications, request OS permission, or pretend in-app banners are push notifications.
- `src/services/storage.ts`: existing opt-in typed persistence. The sample form is deliberately ephemeral; apps must choose a native or web storage backend and migration policy.

## Validation

Run `npm run ci` and `npx expo-doctor`. Confirm keyboard avoidance, dark mode, system text scaling, Android back behavior, three-button navigation, and small-screen scrolling on devices/emulators. CI unit tests are not device evidence.

## Adoption rule

Keep product-specific form rules, branding, persistence keys, secrets, API endpoints and notification permissions in the receiving app. Do not install extra state management or form dependencies for this example.
