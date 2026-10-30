# Android release and verification

## Debug APK

The `game-template` workflow builds `build/game-debug.apk` on GitHub Actions and uploads `godot-game-debug-apk`. It installs Java 17, the Android SDK, Godot 4.7.2 stable, and matching export templates. CI creates an **ephemeral debug keystore**, different on each run. Install to a fresh test device; do not rely on updating the same installation between CI runs.

On a local machine: install the standard Godot 4.7.2 editor, the matching Android export templates, OpenJDK 17 and Android SDK; configure Java SDK and Android SDK paths under Editor Settings > Export > Android. Open `project.godot`, import, then choose Android debug export or run `godot --headless --path . --export-debug "Android" build/game-debug.apk`. The Android preset currently exports **arm64 only**; customize architectures for actual test devices/emulators.

## Before a real game release

1. Replace `org.example.gamestarter` and `Game Starter` in `export_presets.cfg` with unique brand-owned package ID/name; increment Android `version/code` on every Play update.
2. Create original launcher icons, splash, game content and store metadata. Review Android permissions, internet access, privacy policy and data safety declarations.
3. Prepare a **persistent private release signing key**, backed up securely, and store it in protected CI secrets or a local key store (never Git). Debug keys are not acceptable for store signing.
4. Switch Android export to a **Gradle build** and configure **AAB** output, a supported Play target SDK, signing and review. Godot documents that Play AAB exports require Gradle. The starter does *not* claim a release AAB workflow.
5. Test rendering, screen sizes, touch accuracy, orientation, pause/resume, audio focus, offline behavior, app upgrade and data persistence on real devices.
6. Record tested artifact checksum, OS version, phone model, crash/ANR behavior and Play testing-track result before production.

## References

- https://docs.godotengine.org/en/4.7/tutorials/export/exporting_for_android.html
- https://docs.godotengine.org/en/4.7/tutorials/export/exporting_projects.html
- https://developer.android.com/games/engines/godot/godot-export

Export success alone does not prove the APK can launch or that Play will accept it.
