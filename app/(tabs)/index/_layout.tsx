import { Stack } from "expo-router";
import React from "react";

const CodeStack = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Kodieren/Dekodieren",
          headerLargeTitle: true,

          headerShadowVisible: false,
          headerTransparent: true,
        }}
      />
    </Stack>
  );
};

export default CodeStack;
