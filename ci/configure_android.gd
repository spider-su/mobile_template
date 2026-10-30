@tool
extends SceneTree
## Run with: godot --headless --editor --path . --script res://ci/configure_android.gd

func _initialize() -> void:
	var sdk := OS.get_environment("ANDROID_SDK_ROOT")
	if sdk.is_empty():
		sdk = OS.get_environment("ANDROID_HOME")
	var java := OS.get_environment("JAVA_HOME")
	if sdk.is_empty() or java.is_empty():
		push_error("ANDROID_SDK_ROOT/ANDROID_HOME and JAVA_HOME are required")
		quit(1)
		return
	var settings := EditorInterface.get_editor_settings()
	settings.set_setting("export/android/android_sdk_path", sdk)
	settings.set_setting("export/android/java_sdk_path", java)
	settings.save()
	print("Android SDK and Java paths configured for local Godot export.")
	quit(0)
