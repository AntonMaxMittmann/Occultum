import CodePage from "@/app/components/CodePage";
import DecodePage from "@/app/components/DecodePage";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import React, { useState } from "react";
import { ScrollView } from "react-native";

const Code = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      keyboardDismissMode="on-drag"
      style={{ padding: 18 }}
    >
      <SegmentedControl
        values={["Kodieren", "Dekodieren"]}
        selectedIndex={selectedIndex}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />

      {selectedIndex === 0 ? <CodePage /> : <DecodePage />}
    </ScrollView>
  );
};

export default Code;
