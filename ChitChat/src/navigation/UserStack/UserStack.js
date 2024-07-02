import { TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoomsPages from "../../pages/Rooms/RoomsPages";
import ProfilePages from "../../pages/Profile/ProfilePages";
import MessagesPages from "../../pages/Messages/MessagesPages";
import { FontAwesome } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { bgColor, color2 } from "../../utils/Colors";

const Stack = createNativeStackNavigator();

const UserStack = () => {
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
    <Stack.Navigator
      screenOptions={{
        headerTintColor: bgColor,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: color2,
        },
      }}
    >
      <Stack.Screen
        options={{
          title: "Odalar",
          headerRight: () => (
            <TouchableOpacity onPress={handleSignOut}>
              <FontAwesome name="sign-out" size={25} color={bgColor} />
            </TouchableOpacity>
          ),
        }}
        name="Rooms"
        component={RoomsPages}
      />
      <Stack.Screen name="Profile" component={ProfilePages} />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params.item.roomName,
        })}
        name="Messages"
        component={MessagesPages}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
