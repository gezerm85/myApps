import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",

   
  },
  innerContainer:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30
  },
  title: {
    color: "white",
  },
  titleContainer:{
    flex: 1,

   paddingLeft: 16,
   gap: 16
  }
});
