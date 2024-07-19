import {
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { getAuth, updateProfile } from "firebase/auth";
import avatar from '../../assets/images/avatar.png'
import styles from './ImagePicker.style'

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



