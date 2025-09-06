import React from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Stack } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
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
            {/* Placeholder for Menu Icon */}
            <ThemedText style={styles.iconText}>☰</ThemedText>
          </TouchableOpacity>
          <ThemedText type="title" style={styles.headerLogo}>EcoFinds</ThemedText>
          <TouchableOpacity style={styles.cartIcon}>
            {/* Placeholder for Cart Icon */}
            <ThemedText style={styles.iconText}>🛒</ThemedText>
            <View style={[styles.cartBadge, { backgroundColor: themeColors.tint }]}>
              <ThemedText style={styles.cartCount}>0</ThemedText>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search Bar Section */}
        <View style={styles.searchSection}>
          <View style={[styles.searchInputContainer, { backgroundColor: themeColors.backgroundAlt }]}>
            <TextInput
              placeholder="Search ...."
              placeholderTextColor={themeColors.textSecondary}
              style={[styles.searchInput, { color: themeColors.text }]}
            />
          </View>
          <View style={styles.searchButtons}>
            {['Sort', 'Filter', 'Groupby'].map((buttonText) => (
              <TouchableOpacity key={buttonText} style={[styles.searchButton, { borderColor: themeColors.border }]}>
                <ThemedText style={{ color: themeColors.text }}>{buttonText}</ThemedText>
              </TouchableOpacity>
            ))}
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
                <ThemedText style={{ color: themeColors.textSecondary }}>Product {item}</ThemedText>
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
  iconText: {
    fontSize: 24,
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
  searchInputContainer: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
  },
  searchInput: {
    fontSize: 16,
  },
  searchButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
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
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  categoriesSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
  productsSection: {
    marginBottom: 20,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    height: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
  },
});