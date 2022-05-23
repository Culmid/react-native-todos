import { StyleSheet } from "react-native";

export default StyleSheet.create({
  todoContainer: {
    minHeight: 50,
    flex: 1,
    borderColor: "#000",
    borderWidth: 2,
    marginHorizontal: 10,
    marginBottom: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
  },
  todoTitle: {
    fontSize: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
