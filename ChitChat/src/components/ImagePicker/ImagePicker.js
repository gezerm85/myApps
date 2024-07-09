import {
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import avatar from "../../assets/images/avatar.png";

const imagePicker = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bodyContainer} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Image source={avatar} style={styles.image} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default imagePicker;

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    height: height * 0.2,
    borderRadius: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    flex: 1,
    borderRadius: 100,
  },
  image: {
    width: width * 0.4,
    height: height * 0.2,
    borderRadius: 100,
    resizeMode: "cover",
  },
});
