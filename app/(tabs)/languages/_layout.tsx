import Ionicons from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

const LanguagesStack = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Sprachen",
          headerLargeTitle: true,
          headerTransparent: true,
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
                <Ionicons name="add" size={30} />
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
