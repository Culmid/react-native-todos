import { View, Text, Pressable, Switch, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import Svg, { Path } from "react-native-svg";

export default function Todo({
  id,
  text,
  isComplete,
  onToggleTodo,
  onDeleteTodo,
}) {
  function onTodoPress() {
    onToggleTodo(id);
  }

  return (
    <Pressable onPress={onTodoPress}>
      <View style={styles.todoContainer}>
        <Text style={styles.todoTitle}>{text}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => onDeleteTodo(id)}>
            <Svg width="25" height="25" viewBox="0 0 448 512">
              <Path
                d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
                fill="black"
              />
            </Svg>
          </TouchableOpacity>
          <Switch value={isComplete} onValueChange={onTodoPress} />
        </View>
      </View>
    </Pressable>
  );
}
