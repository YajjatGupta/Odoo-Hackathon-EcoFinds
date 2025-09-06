import React from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuIcon}>
            <IconSymbol name="line.3.horizontal" size={28} color={themeColors.text} />
          </TouchableOpacity>
          <ThemedText type="title" style={styles.headerLogo}>EcoFinds</ThemedText>
          <TouchableOpacity style={styles.cartIcon}>
            <IconSymbol name="cart.fill" size={28} color={themeColors.text} />
            <View style={[styles.cartBadge, { backgroundColor: themeColors.tint }]}>
              <ThemedText style={styles.cartCount}>0</ThemedText>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search & Filter Section */}
        <View style={styles.searchSection}>
          <View style={styles.searchRow}>
            <View style={[styles.searchInputContainer, { backgroundColor: themeColors.backgroundAlt }]}>
              <IconSymbol name="magnifyingglass" size={20} color={themeColors.textSecondary} style={styles.searchIcon} />
              <TextInput
                placeholder="Search for eco-friendly products..."
                placeholderTextColor={themeColors.textSecondary}
                style={[styles.searchInput, { color: themeColors.text }]}
              />
            </View>
            <TouchableOpacity style={[styles.filterButton, { borderColor: themeColors.border, backgroundColor: themeColors.backgroundAlt }]}>
              <IconSymbol name="slider.horizontal.3" size={24} color={themeColors.text} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner Image Section */}
        <View style={[styles.bannerContainer, { backgroundColor: themeColors.backgroundAlt }]}>
          <ThemedText type="subtitle" style={{ color: themeColors.textSecondary }}>Banner Image</ThemedText>
        </View>

        {/* All Categories Section */}
        <View style={styles.categoriesSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>All Categories</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
            {[1, 2, 3, 4].map((item) => (
              <TouchableOpacity key={item} style={[styles.categoryCard, { backgroundColor: themeColors.backgroundAlt, borderColor: themeColors.border }]}>
                <ThemedText style={{ color: themeColors.textSecondary }}>Category {item}</ThemedText>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Products Section */}
        <View style={styles.productsSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Products</ThemedText>
          <View style={styles.productGrid}>
            {[1, 2, 3, 4].map((item) => (
              <TouchableOpacity key={item} style={[styles.productCard, { backgroundColor: themeColors.backgroundAlt, borderColor: themeColors.border }]}>
                <Image source={{ uri: `https://picsum.photos/id/${100 + item}/200` }} style={styles.productImage} />
                <ThemedText style={styles.productName}>Product {item}</ThemedText>
                <ThemedText style={styles.productPrice}>₹999</ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuIcon: {
    padding: 8,
  },
  headerLogo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartIcon: {
    padding: 8,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCount: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  searchSection: {
    marginBottom: 20,
  },
  searchRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  bannerContainer: {
    height: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  productsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoriesSection: {
    marginBottom: 20,
  },
  categoryScroll: {
    paddingVertical: 5,
  },
  categoryCard: {
    width: 120,
    height: 80,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  productCard: {
    width: '48%',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
});