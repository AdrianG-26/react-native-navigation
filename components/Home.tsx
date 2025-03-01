import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, FlatList, StyleSheet, Text, View, Image } from "react-native";

const products = [
  { id: 1, name: "Ice Cream Cone", price: 20 },
  { id: 2, name: "Coke Float", price: 50 },
  { id: 3, name: "Soda Float", price: 50 },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logo}/>
      <Text style={styles.title}>Available Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text style={styles.productText}>
              {item.name} - ₱{item.price}
            </Text>
            <Button title="Add to Cart" onPress={() => {}} />
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Cart"
          onPress={() => navigation.navigate("Cart")}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FAF9F6" },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
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
  buttonContainer: { marginTop: 20 },
});
