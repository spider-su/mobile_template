import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppErrorBoundary } from './src/components/AppErrorBoundary';
import { AppNavigation } from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppErrorBoundary>
        <AppNavigation />
      </AppErrorBoundary>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
