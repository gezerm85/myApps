import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default styles = StyleSheet.create({
    container: {
        width: width * 0.4,
        height: width * 0.4,
        borderRadius: 10000,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
      },
      bodyContainer: {
        flex: 1,
      },
      image: { 
        width: width * 0.4,
        height: width * 0.4,
        borderRadius: 10000,
        resizeMode: "cover",
      },
})