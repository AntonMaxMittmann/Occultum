import React from "react";
import { ScrollView, Text } from "react-native";

const SettingsView = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      className="p-4 dark:bg-gray-950"
    >
      <Text>SettingsView</Text>
    </ScrollView>
  );
};

export default SettingsView;
