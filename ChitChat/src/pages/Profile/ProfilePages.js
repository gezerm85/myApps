import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./ProfilePages.style";
import { FontAwesome } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { bgColor } from "../../utils/Colors";
import ImagePicker from "../../components/ImagePicker/ImagePicker";

const ProfilePages = () => {
  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      await AsyncStorage.removeItem("userToken");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <ImagePicker />
      <Text style={styles.title}>ProfilePagess</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <FontAwesome name="sign-out" size={25} color={bgColor} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePages;
