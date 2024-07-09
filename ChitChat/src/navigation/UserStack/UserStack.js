import { Dimensions } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoomsPages from "../../pages/Rooms/RoomsPages";
import MessagesPages from "../../pages/Messages/MessagesPages";
import { bgColor } from "../../utils/Colors";

const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: bgColor,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#252525",
        },
        headerShown: true,
      }}
    >
      <Stack.Screen
        options={{
          title: "Odalar",
        }}
        name="Rooms"
        component={RoomsPages}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params.item.roomName,
          headerShown: true,
        })}
        name="Messages"
        component={MessagesPages}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
