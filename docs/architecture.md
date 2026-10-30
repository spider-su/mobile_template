# Architecture

## Runtime

- **Godot 4.7.2 standard/GDScript**, using the GL Compatibility renderer and a portrait 720×1280 design viewport.
- `project.godot`: application entry, display settings, renderer.
- `scenes/main.tscn`: replaceable game screen.
- `scripts/demo_game.gd`: disposable UI/input sample with pause, scoring and persistence.
- `scripts/game_session.gd`: deterministic, testable pure domain state without dependency on the scene tree.
- `tests/test_game_session.gd`: zero-dependency headless regression tests.
- `export_presets.cfg`: **debug APK** Android export preset. Project-specific application ID must replace placeholder.
- `.github/workflows/godot-ci.yml`: CI writes temporary editor configuration for Android SDK/JDK paths.

## Principles

Game-specific input/graphics/physics belong in product scenes or scripts; keep score, rule validation, and deterministic simulations separately testable when possible. For physics games use built-in Godot 2D nodes and fixed-step updates; do **not** build a custom physics abstraction before necessary.

Do not add native plugins or a Gradle custom Android project by default. Turn on Gradle only when plugins or Play AAB exports require it. Keep analytics, ads, IAP, cloud saves, and authentication opt-in, with explicit device tests.

## Branch organization

`main` is React Native/Expo app template; `game-template` is an independent Godot starter. **Neither branch should be merged into the other.** To start a new game use `git clone -b game-template --single-branch ...`, then change remote/identity for the new product. Shared fixes can be cherry-picked or manually ported when language/platform differences allow.
