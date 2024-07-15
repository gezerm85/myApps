import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { getAuth, updateProfile } from "firebase/auth";
import avatar from '../../assets/images/avatar.png'

const ImagePickerComponent = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        await updateProfile(user, {
          photoURL: result.assets[0].uri,
        });
      }

      setImage(result.assets[0].uri);
    }
  };

  const auth = getAuth();
  const profile = auth.currentUser?.photoURL;


  useEffect(() => {}, [profile, image]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bodyContainer} onPress={pickImage}>
        <Image source={profile ? { uri: profile } : avatar} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerComponent;

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    flex: 1,
  },
  image: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: '100%',
    resizeMode: "cover",
  },
});
