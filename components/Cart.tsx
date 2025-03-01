import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

const cartItems = [
  { id: 1, name: "Product A", price: 10, quantity: 2 },
  { id: 2, name: "Product B", price: 20, quantity: 1 },
];

const Cart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.itemText}>
                {item.name} - ${item.price} x {item.quantity}
              </Text>
              <View style={styles.buttonGroup}>
                <Button title="+" onPress={() => {}} />
                <Button title="-" onPress={() => {}} />
              </View>
            </View>
          )}
        />
      )}
      <View style={styles.buttonContainer}>
        <Button
          title="Proceed to Checkout"
          onPress={() => navigation.navigate("Checkout")}
        />
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
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
    justifyContent: "space-between",
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
  itemText: { fontSize: 16 },
  buttonGroup: { flexDirection: "row", gap: 10 },
  buttonContainer: { marginTop: 20 },
});
