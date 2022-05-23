import { StyleSheet } from "react-native";

export default StyleSheet.create({
  todoContainer: {
    minHeight: 50,
    width: "100%",
    borderColor: "#000",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoTitle: {
    fontSize: 20,
  },
});
