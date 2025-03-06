import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
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
    Alert.alert("Success!", `${product.name} was added to the cart!`);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo-cover.png")} style={styles.logo} />
      <Text style={styles.title}>Available Products</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 300 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.product}>
              <Image source={item.image} style={styles.image} />
              <View>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>₱{item.price}</Text>
              </View>
              <FontAwesome6
                name="cart-plus"
                size={30}
                color="#F2E3D6"
                onPress={() => handleAddToCart(item)}
                style={styles.cartIcon}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2E3D6" },
  logo: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 30,
    textAlign: "center",
    color: "#82589A",
    textShadowColor: "#fff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  product: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#82589A",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#F2E3D6",
  },
  productName: {
    textAlign: "left",
    marginBottom: 20,
    fontSize: 23,
    fontWeight: "bold",
    color: "#F2E3D6",
  },
  productPrice: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold",
    color: "#7BB9B1",
  },
  cartIcon: { position: "absolute", right: 20 },
});
