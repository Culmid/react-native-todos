import { View, TextInput, Button } from "react-native";
import styles from "./style";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <TextInput placeholder="Add todo" style={styles.todoInput} />
      <Button title="Add todo" />
    </View>
  );
}
