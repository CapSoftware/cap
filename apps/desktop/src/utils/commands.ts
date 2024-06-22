/* eslint-disable */
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

declare global {
    interface Window {
        __TAURI_INVOKE__<T>(cmd: string, args?: Record<string, unknown>): Promise<T>;
    }
}

// Function avoids 'window not defined' in SSR
const invoke = () => window.__TAURI_INVOKE__;

export function startDualRecording(options: RecordingOptions) {
    return invoke()<null>("start_dual_recording", { options })
}

export function stopAllRecordings() {
    return invoke()<null>("stop_all_recordings")
}

export function enumerateAudioDevices() {
    return invoke()<string[]>("enumerate_audio_devices")
}

export function startServer() {
    return invoke()<number>("start_server")
}

export function openScreenCapturePreferences() {
    return invoke()<null>("open_screen_capture_preferences")
}

export function openMicPreferences() {
    return invoke()<null>("open_mic_preferences")
}

export function openCameraPreferences() {
    return invoke()<null>("open_camera_preferences")
}

export function hasScreenCaptureAccess() {
    return invoke()<boolean>("has_screen_capture_access")
}

export function resetScreenPermissions() {
    return invoke()<null>("reset_screen_permissions")
}

export function resetMicrophonePermissions() {
    return invoke()<null>("reset_microphone_permissions")
}

export function resetCameraPermissions() {
    return invoke()<null>("reset_camera_permissions")
}

export type RecordingOptions = { user_id: string; video_id: string; screen_index: string; video_index: string; audio_name: string; aws_region: string; aws_bucket: string }
