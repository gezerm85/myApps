import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPages from "../../pages/Login/LoginPages";
import SignUpPages from "../../pages/SignUp/SignUpPages";
import HomePages from "../../pages/Home/HomePages";
import { bgColor } from "../../utils/Colors";

const Stack = createNativeStackNavigator(); 

const AuthStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: bgColor },
      }}
    >
      <Stack.Screen name="Home" component={HomePages} />
      <Stack.Screen name="Login" component={LoginPages} />
      <Stack.Screen name="SignUp" component={SignUpPages} />
    </Stack.Navigator>
  );
};

export default AuthStack;
