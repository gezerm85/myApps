import { StyleSheet } from "react-native";
import { bgColor2, color } from "../../utils/Colors";

export default styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 20,
  },
  container: {
    flexDirection: "row",
    gap: 6,
  },
  body_container: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 5,
    flexDirection: "row",
  },

  input_container: {
    flex: 1,
    textAlign: "center",
  },
  inputbox: {
    flex: 1,
    
  },
  btn: {
    width: "20%",
    height: 50,
    backgroundColor: bgColor2,
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: "center",
  },
  btn_text: {
    color: color,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
});
