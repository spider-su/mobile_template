/** Product apps can implement this with expo-local-authentication. */
export interface BiometricAdapter {
  isAvailable(): Promise<boolean>;
  authenticate(): Promise<boolean>;
}
export async function checkBiometrics(adapter: BiometricAdapter): Promise<'unavailable' | 'verified' | 'failed'> {
  if (!await adapter.isAvailable()) return 'unavailable';
  return await adapter.authenticate() ? 'verified' : 'failed';
}
