import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Todos from "./components/Todos";
import uuid from "react-native-uuid";

export default function App() {
  const [todos, setTodos] = useState([]);

  function onAddTodo(text) {
    setTodos((oldState) => [
      ...oldState,
      { id: uuid.v4(), text, isComplete: false },
    ]);
  }

  function onToggleTodo(id) {
    console.log(id);
  }

  return (
    <View style={styles.appContainer}>
      <Header onAddTodo={onAddTodo} />
      <Todos todos={todos} onToggleTodo={onToggleTodo} />
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
