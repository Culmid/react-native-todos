import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import Todo from "../Todo";

export default function Todos({ todos }) {
  return (
    <View style={styles.todosContainer}>
      <ScrollView>
        {todos.map(({ id, text, isComplete }) => (
          <Todo key={id} id={id} text={text} isComplete={isComplete} />
        ))}
      </ScrollView>
    </View>
  );
}
