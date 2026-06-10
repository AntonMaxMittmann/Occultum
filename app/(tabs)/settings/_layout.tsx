import { Stack } from "expo-router";
import React from "react";

const SettingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Einstellungen",
          headerShown: true,
          headerLargeTitle: true,
        }}
      />
    </Stack>
  );
};

export default SettingsLayout;
