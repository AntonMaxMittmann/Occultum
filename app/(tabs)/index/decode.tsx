import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Text, TextInput, View } from "react-native";

const DecodeComponent = () => {
  return (
    <View className="flex flex-col">
      <View className="bg-blue-200 p-2 rounded-xl">
        <View>
          <TextInput
            placeholder="z.B. 38270547087"
            className="bg-blue-200 p-2 rounded-xl h-28"
            multiline={true}
            scrollEnabled={true}
            autoCorrect={false}
          />
        </View>
        <View>
          <Picker>
            <Picker.Item label="Text zu Zahlen" />
            <Picker.Item label="Test" />
          </Picker>
        </View>
      </View>

      <View className="flex items-center m-2">
        <Ionicons name="arrow-down" size={24} />
      </View>

      <View className="flex flex-row">
        <View className="w-full min-h-56 bg-blue-200 p-2 rounded-lg">
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default DecodeComponent;
