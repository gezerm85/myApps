import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import avatar from "../../assets/images/avatar.png";
import { getAuth, updateProfile } from "firebase/auth";
import { ref, set, push, getDatabase, onValue } from "firebase/database";


const ImagePickerComponent = () => {
  const [image, setImage] = useState(null);

  const [data, setData]= useState(null)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      return result.assets[0].uri;
    }
    return null;
  };

  const writeUserData = async () => {
    try {
      const imageUri = await pickImage();
      if (imageUri) {
        const auth = getAuth();
        const userMail = auth.currentUser.email;
        const user = auth.currentUser;

        await updateProfile(user, {
          photoURL: imageUri
        })

        const db = getDatabase();
        const roomsRef = ref(db, "UserImage");
        const newRoomRef = push(roomsRef);
        await set(newRoomRef, {
          image: imageUri,
          id: user.uid,
          userName: userMail.split("@")[0],
        });

        setImage(imageUri);
      }
    } catch (error) {
      console.error("Error writing user data:", error);
    }
  };

  const getUser = () => {
    const db = getDatabase();
    const starCountRef = ref(db, "UserImage");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userImage = Object.values(data).find(
          (item) => item.id === getAuth().currentUser.uid
        );
        setData(userImage ? userImage.image : null);
      } else {
        setData(null);
      }
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const auth = getAuth()
  const {displayName, email, photoURL, phoneNumber} = auth.currentUser;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bodyContainer} onPress={writeUserData}>
        {data ? (
          <Image source={{ uri: photoURL }} style={styles.image} />
        ) : (
          <Image source={avatar} style={styles.image} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerComponent;

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
