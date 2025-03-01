import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#d17d92" },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
