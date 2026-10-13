import { useState } from 'react';
import { Alert } from 'react-native';
import { AppButton, AppCard, AppScreen, AppText, ConfirmDialog, FeedbackBanner, LoadingSpinner, TextField, ToggleField } from '../ui/primitives';
import { validateDemoForm, type DemoForm, type FormErrors } from '../ui/validation';

export function HomeScreen() {
  const [form, setForm] = useState<DemoForm>({ name: '', email: '', amount: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [message, setMessage] = useState('Welcome! Explore the components below.');
  const change = (key: keyof DemoForm) => (value: string) => {
    setForm(previous => ({ ...previous, [key]: value }));
    setErrors(previous => ({ ...previous, [key]: undefined }));
  };
  const submit = () => {
    const next = validateDemoForm(form);
    setErrors(next);
    setMessage(Object.keys(next).length ? 'Please correct the highlighted fields.' : 'Validated successfully (demo only; nothing submitted).');
  };
  return <AppScreen>
    <AppText title>Mobile UI Kit</AppText>
    <AppText>A small, working showcase of reusable components. No account or backend needed.</AppText>
    <FeedbackBanner message={message} />
    <AppCard>
      <AppText title>Buttons and feedback</AppText>
      <AppButton label="Show message" onPress={() => setMessage('Action completed.')} />
      <AppButton label="Open confirmation" variant="secondary" onPress={() => setConfirm(true)} />
      <AppButton label="Show native alert" variant="secondary" onPress={() => Alert.alert('Example alert', 'This is a local UI alert.')} />
      <AppButton label="Disabled action" disabled onPress={() => undefined} />
    </AppCard>
    <AppCard>
      <AppText title>Loading and states</AppText>
      <AppButton label={loading ? 'Stop spinner' : 'Show spinner'} variant="secondary" onPress={() => setLoading(!loading)} />
      {loading ? <LoadingSpinner label="Example loading state" /> : <AppText>Ready</AppText>}
    </AppCard>
    <AppCard>
      <AppText title>Validated form</AppText>
      <TextField label="Name" placeholder="Ada" value={form.name} onChangeText={change('name')} error={errors.name} />
      <TextField label="Email" placeholder="ada@example.com" value={form.email} onChangeText={change('email')} error={errors.email} keyboardType="email-address" />
      <TextField label="Amount" placeholder="12.50" value={form.amount} onChangeText={change('amount')} error={errors.amount} keyboardType="numeric" />
      <ToggleField label="Example preference" value={enabled} onValueChange={setEnabled} />
      <AppButton label="Validate form" onPress={submit} />
      <AppButton label="Clear form" variant="secondary" onPress={() => { setForm({ name: '', email: '', amount: '' }); setErrors({}); setMessage('Form cleared.'); }} />
    </AppCard>
    <AppCard>
      <AppText title>Notifications</AppText>
      <AppText>In-app feedback is available above. OS notifications require an optional Expo Notifications adapter and platform permissions; this starter does not request permissions or register push tokens.</AppText>
    </AppCard>
    <ConfirmDialog visible={confirm} title="Confirm example action?" onCancel={() => setConfirm(false)} onConfirm={() => { setConfirm(false); setMessage('Confirmed.'); }} />
  </AppScreen>;
}
