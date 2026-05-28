import { Stack } from "expo-router";
import React from "react";

const LangsIndex = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Alle Sprachen",
          headerShown: true,
          headerLargeTitle: true,
        }}
      />
    </Stack>
  );
};

export default LangsIndex;
