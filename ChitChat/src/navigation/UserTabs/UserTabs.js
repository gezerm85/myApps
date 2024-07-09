import React, { useState } from "react";
import { Dimensions, TouchableOpacity, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserStack from "../UserStack/UserStack";
import ProfilePages from "../../pages/Profile/ProfilePages";
import { getAuth } from "firebase/auth";
import {
  FontAwesome5,
  AntDesign,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { bgColor, color, color2 } from "../../utils/Colors";
import HeaderButton from "../../components/HeaderButton/HeaderButton";

const Tab = createBottomTabNavigator();

const UserTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: () => null,
        tabBarStyle: {
          backgroundColor: "#252525",
          height: 56,
        },
        tabBarActiveTintColor: bgColor,
        tabBarInactiveTintColor: "#fff",
        headerShown: false,
        headerStyle: {
          backgroundColor: "#252525",
        },
        headerTintColor: bgColor,
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        options={{
          title: "Odalar",
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
        }}
        name="MessagesPages"
        component={UserStack}
      />
      <Tab.Screen
        options={{
          title: "btn",
          tabBarIcon: () => <HeaderButton />,
        }}
        name="btn"
        component={UserStack}
      />
      <Tab.Screen
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" size={24} color={color} />
          ),
          headerShown: true,
        }}
        name="Profile"
        component={ProfilePages}
      />
    </Tab.Navigator>
  );
};

export default UserTabs;
