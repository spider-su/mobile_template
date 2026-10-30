# Godot Game Template (Android-first)

This **game-template branch** of [mobile_template](https://github.com/spider-su/mobile_template) is a standalone **Godot 4.7.2 stable / GDScript** starter for small original 2D mobile games. The `main` branch remains the Expo / React Native **app** template. **Do not merge this branch into main**: select the correct starting branch when creating a product.

It reuses the original template's local CI/APK artifact philosophy and engineering conventions, **not** its React Native runtime. Embedding Godot inside Expo would add a second UI/runtime and is intentionally out of scope.

## Included

- Portrait, touch-first demo scene: tap to increase score, pause/resume, reset, persisted best score.
- Pure, unit-testable game session logic; no external plugins or backend.
- Compatibility renderer suitable for low-end Android devices.
- Godot headless smoke/logic tests and GitHub Actions Android **debug APK** export and artifact upload, all run locally on GitHub-hosted runners, **without EAS or Expo**.
- A portable, pinned Godot editor + matching export-template download.
- Settings/identity, store release, testing and Codex conventions documented separately.

## Getting started

1. Install **Godot 4.7.2 stable (standard, non-.NET)**.
2. Open `project.godot` and run the scene (F6) or project (F5).
3. Customize the game identity in `project.godot` and `export_presets.cfg` (especially `package/unique_name`).
4. Replace `scenes/main.tscn` and the demo `scripts/demo_game.gd` with the real game.
5. Keep reusable pure logic in `scripts/game_session.gd` or replace it with your product's pure state model.

Run the offline logic test with `godot --headless --path . --script res://tests/test_game_session.gd`.
Run the editor import check with `godot --headless --path . --editor --import --quit`.

## Build Android debug APK

Push to **game-template**, or start the `Godot Game CI` workflow manually. It installs matching Godot 4.7.2 templates and Android SDK, runs tests, exports a signed **debug APK**, and uploads `godot-game-debug-apk` as an Actions artifact. The debug key is generated afresh on each CI run: **don't use these artifacts for update-over-install or Play releases**.

Locally, follow [Android setup](docs/android-release.md). In an Android-configured Godot editor, select Project > Export > Android, or run:

```bash
mkdir -p build
godot --headless --path . --export-debug "Android" build/game-debug.apk
```

A Play Store **AAB** is not produced by this starter. Publishing requires a project-specific application ID, stable release signing, Gradle Android export, appropriate target SDK, and Play testing. See [docs/android-release.md](docs/android-release.md).

## Important boundaries

- The demo is a technical smoke sample, **not** a physics engine or finished game.
- No ads, in-app purchase SDK, analytics, accounts, leaderboards or online services are installed.
- CI export success is not a substitute for an emulator or real-device test.
- The `main` Expo app template's screens and UI components are not compatible with Godot scenes. Engineering and release practices are deliberately mirrored instead.

See [architecture](docs/architecture.md), [game release checklist](docs/android-release.md) and [AGENTS.md](AGENTS.md).
