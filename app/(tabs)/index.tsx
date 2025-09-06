import { Image } from 'expo-image';
import { Platform, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

const ProductCard = () => {
  return (
    <ThemedView style={styles.productCard}>
      <Image
        source={require('@/assets/images/react-logo.png')}
        style={styles.productImage}
      />
      <ThemedView style={{ padding: 10 }}>
        <ThemedText type="defaultSemiBold">Product Title</ThemedText>
        <ThemedText style={styles.productPrice}>$99.99</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default function HomeScreen() {
  const tintColor = useThemeColor({}, 'tint');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">EcoFinds</ThemedText>
      </ThemedView>

      <ThemedView style={styles.searchContainer}>
        <ThemedView style={styles.searchInput}>
          <ThemedText>Search for products...</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.categoryContainer}>
        <ThemedText>Category 1</ThemedText>
        <ThemedText>Category 2</ThemedText>
        <ThemedText>Category 3</ThemedText>
      </ThemedView>

      <ScrollView contentContainerStyle={styles.productFeed}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>

      <Link href="../add-product" asChild>
        <TouchableOpacity style={StyleSheet.flatten([styles.fab, { backgroundColor: tintColor }])}>
          <IconSymbol name="paperplane.fill" size={28} color="#fff" />
        </TouchableOpacity>
      </Link>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  searchContainer: {
    paddingVertical: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  productFeed: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 10,
    gap: 10,
  },
  productCard: {
    width: '48%',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#f0f0f0',
  },
  productPrice: {
    color: '#888',
    marginTop: 5,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});