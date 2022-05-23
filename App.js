import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Header />
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
