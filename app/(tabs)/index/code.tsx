import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

const CodeComponent = () => {
  return (
    <View className="flex flex-col">
      <TextInput
        placeholder="Text in normaler Schrift..."
        className="bg-blue-200 p-2 rounded-xl h-28"
        multiline={true}
        scrollEnabled={true}
        autoCorrect={true}
      />

      <View className="flex items-center m-2">
        <Ionicons name="arrow-down" size={24} />
      </View>
      <View className="bg-blue-200 p-2 rounded-xl">
        <View>
          <Picker>
            <Picker.Item label="Text zu Zahlen" />
            <Picker.Item label="Test" />
          </Picker>
        </View>
        <View className="flex flex-row">
          <View className="w-[80%] flex flex-row">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              totam quos reprehenderit perspiciatis nam vitae! Recusandae,
              nostrum iure ipsum cumque, deserunt numquam hic magnam expedita
              autem consequuntur molestias ducimus libero.
            </Text>
          </View>
          <View className="flex flex-col ml-3">
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Copy");
              }}
              className="m-2 bg-blue-300 w-12 h-12 rounded-full flex items-center justify-center p-2"
            >
              <Ionicons name="copy-outline" size={24} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Share");
              }}
              className="bg-blue-300 m-2 mt-16 w-12 h-12 rounded-full flex items-center justify-center p-2"
            >
              <Ionicons name="share-outline" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CodeComponent;
