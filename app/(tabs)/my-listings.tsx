import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function MyListingsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">My Listings</ThemedText>
      <ThemedText>This is a placeholder for your product listings.</ThemedText>
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
