import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";

const cartItems = [
  { id: 1, name: "Product A", price: 10, quantity: 2 },
  { id: 2, name: "Product B", price: 20, quantity: 1 },
];

const totalPrice = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

const Checkout = () => {
  const navigation = useNavigation();

  const handleCheckout = () => {
    Alert.alert("Checkout successful", "Your order has been placed!", [
      { text: "OK", onPress: () => navigation.navigate("Home") },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemText}>
              {item.name} - ${item.price} x {item.quantity}
            </Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${totalPrice}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Checkout" onPress={handleCheckout} />
        <Button
          title="Back to Cart"
          onPress={() => navigation.navigate("Cart")}
        />
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  cartItem: {
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
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "right",
  },
  buttonContainer: { marginTop: 20 },
});
