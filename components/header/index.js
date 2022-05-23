import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styles from "./style";

export default function Header({ onAddTodo }) {
  const [todoInput, setTodoInput] = useState("");

  function onTextInputChange(text) {
    setTodoInput(text);
  }

  function onButtonPress() {
    onAddTodo(todoInput);
  }

  return (
    <View style={styles.headerContainer}>
      <TextInput
        placeholder="Add todo"
        style={styles.todoInput}
        onChangeText={onTextInputChange}
        value={todoInput}
      />
      <Button title="Add todo" onPress={onButtonPress} />
    </View>
  );
}
