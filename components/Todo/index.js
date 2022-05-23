import { View, Text, Pressable, Switch } from "react-native";
import React from "react";
import styles from "./style";

export default function Todo({ id, text, isComplete, onToggleTodo }) {
  function onTodoPress() {
    onToggleTodo(id);
  }

  return (
    <Pressable onPress={onTodoPress}>
      <View style={styles.todoContainer}>
        <Text style={styles.todoTitle}>{text}</Text>
        <Switch value={isComplete} />
      </View>
    </Pressable>
  );
}
