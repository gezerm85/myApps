import { StyleSheet } from "react-native";
import { color, bgColor3 } from "../../../utils/Colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor3,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 8,
    height: 68,
  },
  scroll_container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 18,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: 68,
  },
  innerContainer: {
    flex: 1,
  },
  title_box: {
    color: "#fff",
    fontWeight: "bold",
  },
  date_box: {
    color: "#ffff",
  },
});
