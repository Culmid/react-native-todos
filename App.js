import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Todos from "./components/Todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  function onAddTodo(text) {
    setTodos((oldState) => [...oldState, text]);
  }

  return (
    <View style={styles.appContainer}>
      <Header onAddTodo={onAddTodo} />
      <Todos todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
