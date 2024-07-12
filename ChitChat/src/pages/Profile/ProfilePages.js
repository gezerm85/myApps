import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ProfilePages.style";
import { FontAwesome } from "@expo/vector-icons";
import { bgColor } from "../../utils/Colors";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/userSlice";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";

const ProfilePages = () => {
  const dispatch = useDispatch();

  const auth = getAuth();

  const {displayName, email, photoURL, phoneNumber} = auth.currentUser;
  const  user = auth.currentUser.photoURL; 

  console.log(user);



  const nav = useNavigation();

  const handleSignOut = () => {
    dispatch(logOut());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ImagePicker />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{displayName}</Text>
        <Text style={styles.title}>{email}</Text>
        <TouchableOpacity onPress={handleSignOut}>
          <FontAwesome name="sign-out" size={25} color={bgColor} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePages;
