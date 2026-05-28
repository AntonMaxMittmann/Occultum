import { Stack } from "expo-router";
import React from "react";

const CodeIndex = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Kodieren/Dekodieren",
          headerShown: true,
          headerLargeTitle: true,
        }}
      />
    </Stack>
  );
};

export default CodeIndex;
