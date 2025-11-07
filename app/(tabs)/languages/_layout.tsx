import Ionicons from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import React from "react";
import { TouchableOpacity, useColorScheme } from "react-native";

const LanguagesStack = () => {
  const colorScheme = useColorScheme();
  const headerColor = colorScheme === "dark" ? "white" : "dark";
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Sprachen",
          headerLargeTitle: true,
          headerTransparent: true,
          headerTitleStyle: {
            color: headerColor,
          },
          headerSearchBarOptions: {
            placeholder: "Sprachen durchsuchen...",
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  router.push("./languages/Add");
                }}
                className="flex h-10 w-10 flex-row justify-center items-center"
              >
                <Ionicons name="add" size={30} color={headerColor} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="Add"
        options={{
          presentation: "formSheet",
          title: "Sprachen hinzufügen...",
          headerTransparent: true,
        }}
      />
    </Stack>
  );
};

export default LanguagesStack;
