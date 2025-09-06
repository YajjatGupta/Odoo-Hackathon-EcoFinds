import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

// Define the shape of your user and context data
interface UserType {
  username: string;
  email: string;
}

interface UserContextType {
  user: UserType | null;
  token: string | null;
  loading: boolean;
  login: (userData: UserType, authToken: string) => Promise<void>;
  logout: () => Promise<void>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  token: null,
  loading: true,
  login: async (user, token) => {},
  logout: async () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user data from AsyncStorage on app startup
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('userToken');
        if (storedToken) {
          setToken(storedToken);
          // In a real app, you would fetch user details with this token
          // For now, we'll just set a placeholder user object
          setUser({ username: 'JaneDoe', email: 'jane.doe@example.com' });
        }
      } catch (e) {
        console.error('Failed to load user from storage', e);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  // Function to handle user login
  const login = async (userData: UserType, authToken: string) => {
    await AsyncStorage.setItem('userToken', authToken);
    setUser(userData);
    setToken(authToken);
  };

  // Function to handle user logout
  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    setUser(null);
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
