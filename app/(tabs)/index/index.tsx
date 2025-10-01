import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Code = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      className="p-4"
      keyboardDismissMode="on-drag"
    >
      <TextInput
        multiline={true}
        className="h-32 bg-yellow-400 rounded-lg p-2"
      />
      <View className="pl-20 pr-20 flex flex-col">
        <Picker className="w-20">
          <Picker.Item label="Text zu Zahlen" />
          <Picker.Item label="Test" />
        </Picker>
        {/* <TouchableOpacity>
          <Ionicons size={24} name="information" />
        </TouchableOpacity> */}
      </View>
      <View className="flex flex-row gap-2">
        <View className="bg-yellow-500 h-40 w-[85%]">
          <Text className="p-2">
            gfhdfjldahfjlkahfdlahhjalkdhfdaljfhjdalhkkasdjföajfkadjföadfjdköfjaöfjkdajföajföladjfkajdkfjö
          </Text>
        </View>
        <View className="flex flex-col justify-between">
          <TouchableOpacity className="bg-yellow-400 rounded-full h-14 w-14 flex justify-center items-center">
            <Ionicons name="copy-outline" size={28} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-400 rounded-full h-14 w-14 flex justify-center items-center">
            <Ionicons name="share-outline" size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Code;
