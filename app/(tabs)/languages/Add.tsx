import React from "react";
import { ScrollView, TextInput } from "react-native";

const Add = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      className="p-4 dark:bg-gray-950"
    >
      <TextInput placeholder="Name of the language..." />
    </ScrollView>
  );
};

export default Add;
