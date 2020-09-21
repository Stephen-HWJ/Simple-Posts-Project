import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import CardList from "./components/cardList";
import AddButton from "./components/addButton";
import postsReducer from "./redux/postsReducer";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <CardList />
            <AddButton />
          </ScrollView>
        </SafeAreaView>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
