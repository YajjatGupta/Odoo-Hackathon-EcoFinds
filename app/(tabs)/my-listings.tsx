import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Stack, Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useUser } from '@/hooks/useUserContext';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';
import { Image } from 'expo-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconSymbol } from '@/components/ui/IconSymbol';

// Define the type for a Product object
interface Product {
  _id: string;
  title: string;
  price: number;
  image: string;
  // You can add more properties here as needed
}

const ProductCard = ({ product }: { product: Product }) => {
  const colorScheme = 'light';
  const themeColors = Colors[colorScheme ?? 'light'];
  
  return (
    <ThemedView style={[styles.productCard, { backgroundColor: themeColors.backgroundAlt, borderColor: themeColors.border }]}>
      <Image
        source={{ uri: product.image || 'https://via.placeholder.com/150' }}
        style={styles.productImage}
      />
      <ThemedView style={{ padding: 10 }}>
        <ThemedText type="defaultSemiBold">{product.title}</ThemedText>
        <ThemedText style={[styles.productPrice, { color: themeColors.textSecondary }]}>${product.price}</ThemedText>
        <View style={styles.actions}>
          <TouchableOpacity>
            <IconSymbol name="pencil.circle" size={20} color={themeColors.tint} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconSymbol name="trash.circle" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </ThemedView>
    </ThemedView>
  );
};

export default function MyListingsScreen() {
  const { token, loading } = useUser();
  const [myProducts, setMyProducts] = useState<Product[]>([]);
  const tintColor = useThemeColor({}, 'tint');

  useEffect(() => {
    if (token) {
      fetchMyProducts();
    }
  }, [token]);

  const fetchMyProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products/my', {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      const data = await response.json();
      setMyProducts(data);
    } catch (error) {
      console.error('Failed to fetch my products:', error);
    }
  };
  
  if (loading) {
    return <ThemedText>Loading...</ThemedText>;
  }

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'My Listings',
          headerShown: true, // You may want to show the header here
        }}
      />
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <ThemedText type="title">My Listings</ThemedText>
        <View style={styles.productGrid}>
          {myProducts.length > 0 ? (
            myProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <ThemedText>You have no listings yet.</ThemedText>
          )}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  productCard: {
    width: '48%',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#f0f0f0',
  },
  productPrice: {
    marginTop: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});