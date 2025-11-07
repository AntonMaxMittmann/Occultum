import SegmentedControl from "@react-native-segmented-control/segmented-control";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import CodeComponent from "./code";
import DecodeComponent from "./decode";

const CodeView = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return <CodeComponent />;
      case 1:
        return <DecodeComponent />;
    }
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      className="p-4 dark:bg-gray-950"
      keyboardDismissMode="on-drag"
    >
      <SegmentedControl
        className="mb-4"
        values={["Verschlüsseln", "Entschlüsseln"]}
        selectedIndex={selectedIndex}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <View className="mt-3 h-full">{renderContent()}</View>
    </ScrollView>
  );
};

export default CodeView;
