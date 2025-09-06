import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      router.replace('/(tabs)'); // Navigate to main tabs
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('./Signup')}>
        <Text style={styles.switchText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 15, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#333' },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20, fontSize: 16, borderWidth: 1, borderColor: '#ddd' },
  button: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  switchText: { color: '#4CAF50', textAlign: 'center', marginTop: 20, fontSize: 16 }
});
