import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { Stack, Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';
import { useUser } from '@/hooks/useUserContext';

export default function DashboardScreen() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];
  const { user, logout, loading } = useUser();

  if (loading) {
    return <ThemedText>Loading...</ThemedText>;
  }

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'My Dashboard',
          headerShown: false,
        }}
      />
      <View style={[styles.header, { backgroundColor: themeColors.background }]}>
        <ThemedText type="title" style={styles.headerLogo}>EcoFinds</ThemedText>
        <TouchableOpacity style={styles.headerIcon}>
          <IconSymbol name="cart.fill" size={28} color={themeColors.tint} />
          <View style={[styles.cartBadge, { backgroundColor: themeColors.tint }]}>
            <ThemedText style={styles.cartCount}>0</ThemedText>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        {user ? (
          <>
            {/* User Info Section */}
            <View style={styles.userInfoContainer}>
              <View style={[styles.profileImagePlaceholder, { backgroundColor: themeColors.backgroundAlt }]}>
                {/* Placeholder for Profile Picture */}
                <IconSymbol name="person.fill" size={80} color={themeColors.textSecondary} />
              </View>
              <ThemedText type="title" style={styles.usernameText}>{user.username}</ThemedText>
              <ThemedText style={styles.userEmail}>{user.email}</ThemedText>
              <TouchableOpacity style={[styles.editButton, { borderColor: themeColors.border }]}>
                <ThemedText style={{ color: themeColors.text }}>Edit Profile</ThemedText>
              </TouchableOpacity>
            </View>

            {/* Navigation Buttons */}
            <View style={styles.navigationSection}>
              <Link href="./my-listings.tsx" asChild>
                <TouchableOpacity style={[styles.navButton, { backgroundColor: themeColors.backgroundAlt }]}>
                  <ThemedText style={styles.navButtonText}>My Listings</ThemedText>
                </TouchableOpacity>
              </Link>
              <Link href="./my-purchases" asChild>
                <TouchableOpacity style={[styles.navButton, { backgroundColor: themeColors.backgroundAlt }]}>
                  <ThemedText style={styles.navButtonText}>My Purchases</ThemedText>
                </TouchableOpacity>
              </Link>
              <TouchableOpacity
                style={[styles.logoutButton, { backgroundColor: themeColors.tint }]}
                onPress={logout}
              >
                <ThemedText style={styles.logoutButtonText}>Logout</ThemedText>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View style={styles.notLoggedInContainer}>
            <ThemedText type="subtitle">You are not logged in.</ThemedText>
            <Link href="/(tabs)/auth/login" asChild>
              <TouchableOpacity style={[styles.loginButton, { backgroundColor: themeColors.tint }]}>
                <ThemedText style={styles.logoutButtonText}>Login or Sign Up</ThemedText>
              </TouchableOpacity>
            </Link>
          </View>
        )}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 50 : 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerIcon: {
    padding: 8,
    position: 'relative',
  },
  headerLogo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
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
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  profileImagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  usernameText: {
    fontSize: 28,
  },
  userEmail: {
    fontSize: 16,
    marginBottom: 10,
  },
  editButton: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  navigationSection: {
    gap: 15,
  },
  navButton: {
    padding: 20,
    borderRadius: 8,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  notLoggedInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  loginButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
});
