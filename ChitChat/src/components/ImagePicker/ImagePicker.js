import {
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { getAuth } from "firebase/auth";
import styles from './ImagePicker.style';
import { getDatabase, ref, onValue, set } from "firebase/database";

const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s";

const ImagePickerComponent = () => {
  const [image, setImage] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (image !== null) {
      writeUserData();
    }
  }, [image]);

  const writeUserData = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return;

    const db = getDatabase();
    const userRef = ref(db, `User/${user.uid}`);
    try {
      set(userRef, {
        userName: user.displayName,
        image: image,
      });
    } catch (err) {
      console.error("Error writing user data:", err);
    }
  };

  const getUserData = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return;

    const db = getDatabase();
    const userRef = ref(db, `User/${user.uid}`);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUserData(data);
      }
    });
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    getUserData();
  }, [image]);

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={pickImage}>
        <Image source={userData.image ? { uri: userData.image } : { uri: avatar }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerComponent;