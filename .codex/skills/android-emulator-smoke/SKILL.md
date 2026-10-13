---
name: android-emulator-smoke
description: Run an Android emulator smoke test for the Expo mobile template, validating navigation, safe areas and resilience UI. Use when a running emulator and a fresh build are available.
---

# Android emulator smoke test

1. Record branch, commit, emulator serial, API level, screen size and navigation mode.
2. Verify the ADB target is an emulator before installing, clearing data or changing settings. Never reset a physical device.
3. Build/install from the current checkout using the project's supported Expo workflow. Do not use a stale APK.
4. Check Home and Settings navigation, system insets, light/dark appearance, and error/loading UI where the test harness can trigger them.
5. Capture dated screenshots and results for each case. Document skipped cases and restore any changed settings.
6. Do not claim iOS, real-device or release-build validation from Android emulator evidence.

Downstream apps must add their own app identity, reproducible fixture and product-specific regression plan.
