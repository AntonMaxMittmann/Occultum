import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

const CodeStack = () => {
  const colorScheme = useColorScheme();
  const headerColor = colorScheme === "dark" ? "white" : "dark";
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Ver- und Entschlüsseln",
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

export default CodeStack;
