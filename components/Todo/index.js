import { View, Text } from "react-native";
import React from "react";
import styles from "./style";

export default function Todo({ id, text, isComplete }) {
  return (
    <View style={styles.todoContainer}>
      <Text>{text}</Text>
    </View>
  );
}
