import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "../AuthStack/AuthStack";
import UserStack from "../UserStack/UserStack";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../../firebaseConfig";
import FlashMessage from "react-native-flash-message";

const RootNavigation = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user);
    });
    return unsubscribe;
  }, []);
  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <UserStack />}
      <FlashMessage position="top" />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default RootNavigation;
