import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { loadCart, saveCart, getCart } from "./carts";

export default function CartScreen() {
  const [cart, setCart] = useState(getCart());

  useEffect(() => {
    const fetchCart = async () => {
      const loaded = await loadCart();
      setCart([...loaded]); // spread to trigger state update
    };
    fetchCart();
  }, []);

  const increaseQty = async (id: string) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(newCart);
    await saveCart(newCart);
  };

  const decreaseQty = async (id: string) => {
    const newCart = cart.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setCart(newCart);
    await saveCart(newCart);
  };

  const removeItem = async (id: string) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    await saveCart(newCart);
  };

  const clearCart = async () => {
    setCart([]);
    await saveCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 My Cart</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.itemText}>
                  {item.name} - ₹{item.price}
                </Text>
                <Text>Qty: {item.qty}</Text>
                <View style={styles.buttonRow}>
                  <Button title="+" onPress={() => increaseQty(item.id)} />
                  <Button title="-" onPress={() => decreaseQty(item.id)} />
                  <Button title="Remove" onPress={() => removeItem(item.id)} />
                </View>
              </View>
            )}
          />
          <Text style={styles.total}>Total: ₹{total}</Text>
          <Button title="Clear Cart" onPress={clearCart} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  emptyText: { fontSize: 18, color: "gray" },
  item: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
  },
  itemText: { fontSize: 16, fontWeight: "500" },
  buttonRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 5 },
  total: { fontSize: 18, marginTop: 20, fontWeight: "bold" },
});
