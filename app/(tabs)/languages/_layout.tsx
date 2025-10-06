import { Stack } from "expo-router";
import React from "react";

const LanguagesStack = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Sprachen",
          headerLargeTitle: true,
          headerTransparent: true,
        }}
      />
    </Stack>
  );
};

export default LanguagesStack;
