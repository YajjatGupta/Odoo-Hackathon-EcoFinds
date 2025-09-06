import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { addToCart } from "./utility/carts"; // correct path

const products = [
  { id: "101", name: "React T-shirt", price: 499 },
  { id: "102", name: "Node.js Hoodie", price: 799 },
  { id: "103", name: "JS Mug", price: 199 },
  { id: "104", name: "CSS Cap", price: 299 },
];

export default function ProductScreen() {
  const [_, setUpdate] = useState(0); // force re-render on add

  const handleAdd = async (product: typeof products[0]) => {
    await addToCart(product);
    setUpdate((u) => u + 1); // trigger re-render to reflect addition
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
            <Button title="Add to Cart" onPress={() => handleAdd(item)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  item: { marginBottom: 15, padding: 10, borderWidth: 1, borderColor: "#ddd", borderRadius: 8 },
  name: { fontSize: 18, fontWeight: "500" },
  price: { fontSize: 16, marginVertical: 5 },
});

