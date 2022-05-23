import { View, Text } from "react-native";
import styles from "./style";

export default function Todos({ todos }) {
  return (
    <View style={styles.todosContainer}>
      {todos.map(({ id, text }) => (
        <Text key={id}>{text}</Text>
      ))}
    </View>
  );
}
