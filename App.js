import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Todos from "./components/Todos";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Header />
      <Todos />
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
