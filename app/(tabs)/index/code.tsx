import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { TextInput, View } from "react-native";

const CodeComponent = () => {
  return (
    <View className="flex flex-col">
      <TextInput
        placeholder="Text in normaler Schrift..."
        className="bg-blue-200 p-2 rounded-lg h-28"
        multiline={true}
        scrollEnabled={true}
      />

      <View className="flex items-center mt-2">
        <Ionicons name="arrow-down" size={24} />
      </View>
      <View>
        <Picker>
          <Picker.Item label="Text zu Zahlen" />
          <Picker.Item label="Test" />
        </Picker>
      </View>
    </View>
  );
};

export default CodeComponent;
