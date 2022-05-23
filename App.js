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
    setTodos((oldState) =>
      oldState.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  }

  function onDeleteTodo(id) {
    setTodos((oldState) => oldState.filter((todo) => todo.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <Header onAddTodo={onAddTodo} />
      <Todos
        todos={todos}
        onToggleTodo={onToggleTodo}
        onDeleteTodo={onDeleteTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
