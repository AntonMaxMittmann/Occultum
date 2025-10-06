import { Stack } from "expo-router";
import React from "react";

const SettingsStack = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Einstellungen",
          headerLargeTitle: true,
          headerTransparent: true,
        }}
      />
    </Stack>
  );
};

export default SettingsStack;
