import React from "react";
import { TextInput, View } from "react-native";

const CodeComponent = () => {
  return (
    <View>
      <TextInput
        placeholder="Text in normaler Schrift..."
        className="bg-gray-400 p-2 rounded-lg h-64"
        multiline={true}
      />
    </View>
  );
};

export default CodeComponent;
