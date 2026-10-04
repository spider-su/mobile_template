# Mobile App Template

A small Expo + React Native starting point for focused mobile apps. It contains the platform setup and checks that are useful across our apps, without carrying product flows, customer data, API contracts, brand assets, app identifiers, or release credentials from either source app.

## Start a new app

1. Create a repository from this repository (or clone it and create a new Git history).
2. Replace `APP_NAME`, `APP_SLUG`, `IOS_BUNDLE_IDENTIFIER`, and `ANDROID_PACKAGE` in your local environment or build environment. Keep each app's identifiers unique. Do not reuse another app's EAS project or signing credentials.
3. Replace the sample screens and add only the Expo modules the app needs.
4. Set up app-owned icons, splash assets, API configuration, privacy text, and release configuration.
5. Run the checks below and complete the platform checklist before calling the app device-verified.

For local configuration, copy `.env.example` to `.env` and adjust it. Never commit secrets.

## Included

- Expo SDK 57 / React Native 0.86 starting versions, managed by `package-lock.json`.
- React Navigation bottom tabs and safe-area context.
- Safe-area ownership helpers for app shell, fallback screens, modals, and tab bar.
- Unit tests for inset and tab-bar calculations.
- TypeScript, ESLint, Vitest, and a CI workflow.
- Generic, environment-configurable app name and native IDs.

The sample screens and colors are disposable. Add theme behavior, authentication, storage, notifications, API clients, analytics, or native plugins only when the product needs them.

## Checks

```sh
npm ci
npm run ci
npx expo-doctor
```

CI checks type safety, lint, and unit tests. Expo Doctor checks the installed Expo dependency/configuration set. These checks do not establish behavior on a physical device or simulator.

## Propagate template fixes

New apps should keep this repository as the `template` remote. Pull an update branch and inspect the diff before merging:

```sh
git remote add template git@github.com:spider-su/mobile_template.git
git fetch template
git switch -c template/update-YYYY-MM template/main
git diff main...template/main
git merge --no-ff template/main
```

Use the same review process for each app. Keep product-owned files and configuration out of bulk updates; resolve conflicts deliberately and rerun the app's CI. Apps with separate Git history can use targeted cherry-picks or small PRs for individual fixes instead of merging the starter history. A template update is a proposed source change; each app still owns its adoption and platform validation.

## Shared-code decision rule

Before adding a shared feature, record its source, behavior contract, tests, Expo/RN version compatibility, and device evidence in [the component ledger](docs/component-ledger.md). Port/adapt/skip per app. Move a module into a versioned package only after multiple apps need the same stable API and its release/update path is clear.
