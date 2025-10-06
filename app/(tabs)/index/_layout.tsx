import { Stack } from "expo-router";
import React from "react";

const CodeStack = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Ver- und Entschlüsseln",
          headerLargeTitle: true,
          headerTransparent: true,
        }}
      />
    </Stack>
  );
};

export default CodeStack;
