import React from "react";
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useCart } from "../context/CartContext";
import Ionicons from "react-native-vector-icons/Ionicons"; 

const Cart = ({ navigation }) => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => `${item.id}-${index}`} 
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemText}>{item.name}</Text>
                  <Text>₱{item.price} x {item.quantity}</Text>
                  <Text style={styles.itemTotal}>₱{item.price * item.quantity}</Text>
                </View>
                <View style={styles.buttonGroup}>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
                    <Ionicons name="remove-circle-outline" size={24} color="red" />
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
                    <Ionicons name="add-circle-outline" size={24} color="green" />
                  </TouchableOpacity>
                </View>
                {/* Trash icon for deleting a single item */}
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Ionicons name="trash-outline" size={24} color="black" />
                </TouchableOpacity>
              </View>
            )}
          />

          <Text style={styles.total}>Total: ₱{total}</Text>

          <View style={styles.buttonContainer}>
            {/* Trash button for clearing the entire cart */}
            <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
              <Ionicons name="trash-bin-outline" size={24} color="white" />
              <Text style={styles.clearButtonText}>Clear Cart</Text>
            </TouchableOpacity>

            <Button title="Proceed to Checkout" onPress={() => navigation.navigate("Checkout")} />
          </View>
        </>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F2E3D6" },
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
  clearButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    marginBottom: 10,
  },
  clearButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
