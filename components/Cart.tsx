import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useCart } from "../context/CartContext";

const Cart = ({ navigation }) => {
  const { cart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text>
                  ₱{item.price} x {item.quantity}
                </Text>
                <Text style={styles.itemTotal}>
                  ₱{item.price * item.quantity}
                </Text>
              </View>
              <View style={styles.buttonGroup}>
                <Button title="-" onPress={() => updateQuantity(item.id, -1)} />
                <Text style={styles.quantity}>{item.quantity}</Text>
                <Button title="+" onPress={() => updateQuantity(item.id, 1)} />
              </View>
            </View>
          )}
        />
      )}

      <Text style={styles.total}>Total: ₱{total}</Text>

      {cart.length > 0 && (
        <View style={styles.buttonContainer}>
          <Button
            title="Proceed to Checkout"
            onPress={() => navigation.navigate("Checkout")}
          />
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
    color: "gray",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: { width: 50, height: 50, marginRight: 10 },
  itemDetails: { flex: 1 },
  itemText: { fontSize: 16, fontWeight: "bold" },
  itemTotal: { fontSize: 14, fontWeight: "bold", color: "#333" },
  buttonGroup: { flexDirection: "row", alignItems: "center" },
  quantity: { marginHorizontal: 10, fontSize: 16 },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "right",
  },
  buttonContainer: { marginTop: 20 },
});
