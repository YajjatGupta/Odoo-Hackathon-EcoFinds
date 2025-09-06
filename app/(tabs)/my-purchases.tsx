import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function MyPurchasesScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">My Purchases</ThemedText>
      <ThemedText>This is a placeholder for your purchase history.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
