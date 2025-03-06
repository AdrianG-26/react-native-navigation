import React from "react";
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

const products = [
  {
    id: 1,
    name: "Wafer Cone",
    price: 20,
    image: require("../assets/product-icon/wafer-cone.png"),
  },
  {
    id: 2,
    name: "Giant Cone",
    price: 30,
    image: require("../assets/product-icon/giant-cone.png"),
  },
  {
    id: 3,
    name: "Chocolicious",
    price: 40,
    image: require("../assets/product-icon/chocolicious.png"),
  },
  {
    id: 4,
    name: "Caramel Fudge",
    price: 40,
    image: require("../assets/product-icon/caramel-fudge.png"),
  },
  {
    id: 5,
    name: "Triple Chocolate",
    price: 40,
    image: require("../assets/product-icon/triple-chocolate.png"),
  },
  {
    id: 6,
    name: "Oreoland",
    price: 45,
    image: require("../assets/product-icon/oreoland.png"),
  },
  {
    id: 7,
    name: "Rocky Road",
    price: 45,
    image: require("../assets/product-icon/rocky-road.png"),
  },
  {
    id: 8,
    name: "Nutty Caramel",
    price: 45,
    image: require("../assets/product-icon/nutty-caramel.png"),
  },
  {
    id: 9,
    name: "Coke Float",
    price: 50,
    image: require("../assets/product-icon/coke-float.png"),
  },
  {
    id: 10,
    name: "Sprite Float",
    price: 50,
    image: require("../assets/product-icon/sprite-float.png"),
  },
  {
    id: 11,
    name: "Choco Float",
    price: 60,
    image: require("../assets/product-icon/choco-float.png"),
  },
];

const Home = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    Alert.alert("Success", `${product.name} added to cart!`);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo-cover.png")} style={styles.logo} />
      <Text style={styles.title}>Available Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <Text>
              {item.name} - ₱{item.price}
            </Text>
            <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
          </View>
        )}
        
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF9F6" },
  logo: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontFamily: "Oswald_700Bold",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    marginTop: 15,
  },
  itemContainer: {
    padding: 20,
  },
  product: {
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
  productText: { fontSize: 16 },
  image: { width: 100, height: 100 },
});
