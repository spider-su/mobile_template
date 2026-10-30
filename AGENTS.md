# Godot mobile game template — agent guidance

This branch is a **Godot 4.7.2 GDScript game template**, not an Expo/React Native app. Never merge the `game-template` branch into the `main` Expo template.

1. Read `README.md`, `docs/architecture.md` and `docs/android-release.md` before modifying the project.
2. Keep reusable game rules deterministic and independent from `Node`/scenes where practical. Use headless GDScript tests for them.
3. Keep game-specific assets, characters, monetization and logic out of the generic template; ship a minimal sample only.
4. Do not install Godot addons, ads, login, IAP, cloud SDKs or plugins without a concrete product requirement.
5. Use Godot's standard Android export; **do not** use `expo prebuild`, EAS, React Native or npm for this branch.
6. Keep secrets and keystores out of source control. Per-product Android IDs and release signing must be configured before shipping.
7. Validate changes: `godot --headless --path . --editor --import --quit`; `godot --headless --path . --script res://tests/test_game_session.gd`; Android debug export in CI.
8. Record the Godot version, branch/commit, test results, exported APK and actual on-device evidence. Headless tests and CI build do not prove physical-device behavior.
9. Do not open a PR targeting `main` for converting this template: the two branches represent intentionally different project starters.
