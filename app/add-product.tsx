import { Stack, useNavigation } from 'expo-router';
import { StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function AddProductScreen() {
  const navigation = useNavigation();
  const tintColor = useThemeColor({}, 'tint');
  const textColor = useThemeColor({}, 'text');

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Add New Product',
          headerLeft: ({ canGoBack }) => (
            canGoBack && (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <IconSymbol name="chevron.left" size={24} color={tintColor} />
              </TouchableOpacity>
            )
          )
        }}
      />
      <ThemedText type="title" style={styles.title}>Add New Product</ThemedText>

      <ThemedView style={styles.form}>
        <TextInput
          style={[styles.input, { borderColor: textColor }]}
          placeholder="Product Title"
          placeholderTextColor="#888"
        />
        <TextInput
          style={[styles.input, { borderColor: textColor }]}
          placeholder="Category (Dropdown)"
          placeholderTextColor="#888"
        />
        <TextInput
          style={[styles.input, styles.textArea, { borderColor: textColor }]}
          placeholder="Description"
          placeholderTextColor="#888"
          multiline
        />
        <TextInput
          style={[styles.input, { borderColor: textColor }]}
          placeholder="Price"
          placeholderTextColor="#888"
          keyboardType="numeric"
        />
        
        <TouchableOpacity style={styles.imagePlaceholder}>
          <ThemedText style={{ color: tintColor }}>+ Add Image (Placeholder)</ThemedText>
        </TouchableOpacity>

        <Button title="Submit Listing" color={tintColor} onPress={() => {}} />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    gap: 15,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    color: '#ECEDEE',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  imagePlaceholder: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
  },
});