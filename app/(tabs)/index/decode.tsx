import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Text, TextInput, View } from "react-native";

const DecodeComponent = () => {
  return (
    <View className="flex flex-col">
      <View className="bg-blue-200 p-2 rounded-xl dark:bg-blue-900">
        <View>
          <TextInput
            placeholder="Text in normaler Schrift eingeben..."
            className="bg-blue-200 p-2 rounded-xl h-28 dark:bg-blue-900"
            multiline={true}
            scrollEnabled={true}
            autoCorrect={false}
          />
        </View>
      </View>
      <Picker>
        <Picker.Item label="Text zu Zahlen" />
        <Picker.Item label="Test" />
      </Picker>
      <View className="flex items-center m-2">
        <Ionicons name="arrow-down" size={24} />
      </View>
      <View></View>

      <View className="flex flex-row mt-0">
        <View className="w-full min-h-56 bg-blue-200 dark:bg-blue-900 p-2 rounded-lg">
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default DecodeComponent;
