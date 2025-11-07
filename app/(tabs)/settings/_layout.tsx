import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

const SettingsStack = () => {
  const colorScheme = useColorScheme();
  const headerColor = colorScheme === "dark" ? "white" : "dark";
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Einstellungen",
          headerLargeTitle: true,
          headerTransparent: true,
          headerTitleStyle: {
            color: headerColor,
          },
        }}
      />
    </Stack>
  );
};

export default SettingsStack;
