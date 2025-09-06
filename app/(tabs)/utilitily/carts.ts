import AsyncStorage from "@react-native-async-storage/async-storage";

export type Product = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

// In-memory cart for instant updates
let cart: Product[] = [];

// Load cart from AsyncStorage
export const loadCart = async (): Promise<Product[]> => {
  try {
    const stored = await AsyncStorage.getItem("cart");
    if (stored) {
      cart = JSON.parse(stored);
    }
  } catch (err) {
    console.error(err);
  }
  return cart;
};

// Save cart to AsyncStorage
export const saveCart = async (newCart: Product[]) => {
  cart = newCart;
  await AsyncStorage.setItem("cart", JSON.stringify(cart));
};

// Add product to cart
export const addToCart = async (product: Omit<Product, "qty">) => {
  const index = cart.findIndex((item) => item.id === product.id);
  if (index > -1) {
    cart[index].qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  await saveCart(cart);
};

// Get current in-memory cart
export const getCart = () => cart;
