import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Text, TextInput, useColorScheme, View } from "react-native";

const Code = () => {
  const languages = [];
  const colorScheme = useColorScheme();
  const iconColor = colorScheme === "light" ? "black" : "white";
  return (
    <View className="flex flex-col">
      <View className="bg-blue-200 p-2 rounded-xl dark:bg-blue-900">
        <View>
          <TextInput
            placeholder="Text in normaler Schrift eingeben..."
            className="bg-blue-200 dark:bg-blue-900 p-2 rounded-xl h-28"
            multiline={true}
            scrollEnabled={true}
            autoCorrect={false}
          />
        </View>
      </View>

      <View className="flex items-center m-2">
        <Ionicons name="arrow-down" size={24} color={iconColor} />
      </View>
      <View>
        <Picker>
          <Picker.Item label="Text zu Zahlen" />
          <Picker.Item label="Test" />
        </Picker>
      </View>

      <View className="flex flex-row mt-0">
        <View className="w-full min-h-56 bg-blue-200 dark:bg-blue-900 p-2 rounded-lg">
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default Code;
