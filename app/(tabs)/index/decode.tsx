import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

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

      <View className="w-[80%] flex flex-row">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores velit
          accusantium praesentium corporis dignissimos ut nihil fugiat molestias
          non rerum! Placeat animi debitis exercitationem atque dicta error aut
          eaque deleniti.
        </Text>
        <View className="flex flex-col justify-between ml-3">
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Copy");
            }}
            className="bg-blue-300 w-12 h-12 rounded-full flex items-center justify-center p-2"
          >
            <Ionicons name="copy-outline" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Share");
            }}
            className="bg-blue-300 w-12 h-12 rounded-full flex items-center justify-center p-2"
          >
            <Ionicons name="share-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DecodeComponent;
