import {
  Alert,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useCart } from "../context/CartContext";

const Checkout = ({ navigation }) => {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    Alert.alert("Checkout successful", "Your order has been placed!", [
      {
        text: "OK",
        onPress: () => {
          clearCart();
          navigation.reset({ index: 0, routes: [{ name: "Home" }] });
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

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
          </View>
        )}
      />

      <Text style={styles.total}>Total: ₱{total}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Checkout" onPress={handleCheckout} />
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
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "right",
  },
  buttonContainer: { marginTop: 20 },
});
