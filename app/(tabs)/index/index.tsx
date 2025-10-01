import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Code = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <>
            <TextInput
              multiline={true}
              className="h-24 bg-blue-200 rounded-lg p-2 text-black"
              placeholder="Bitte Text in normaler Schrift eintragen..."
              placeholderTextColor={"rgb(59, 58, 58))"}
            />
            <View className="flex justify-center items-center mt-3">
              <Text>
                In welche Geheimsprache möchtest du den Text oben verschlüsseln?
              </Text>
            </View>
            <View className="pl-14 pr-14 flex flex-col">
              <Picker className="w-20">
                <Picker.Item label="Text zu Zahlen" />
                <Picker.Item label="Test" />
              </Picker>
            </View>
            <View className="flex justify-center items-center p-1 mb-3">
              <Ionicons name="arrow-down" size={24} />
            </View>
            <View className="flex flex-row gap-2">
              <View className="bg-blue-300 h-36 w-[85%] rounded-lg">
                <Text className="p-2">
                  gfhdfjldahfjlkahfdlahhjalkdhfdaljfhjdalhkkasdjföajfkadjföadfjdköfjaöfjkdajföajföladjfkajdkfjö
                </Text>
              </View>
              <View className="flex flex-col justify-between">
                <TouchableOpacity className="bg-blue-800 rounded-full h-14 w-14 flex justify-center items-center">
                  <Ionicons name="copy-outline" size={28} color={"yellow"} />
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-800 rounded-full h-14 w-14 flex justify-center items-center">
                  <Ionicons name="share-outline" size={28} color={"yellow"} />
                </TouchableOpacity>
              </View>
            </View>
          </>
        );

      case 1:
        return (
          <>
            <View className="flex justify-center items-center">
              <Text>Welche Geheimsprache verwendest du?</Text>
            </View>
            <View className="pl-14 pr-14 flex flex-col">
              <Picker className="w-20">
                <Picker.Item label="Text zu Zahlen" />
                <Picker.Item label="Freimaurer-Code" />
              </Picker>
            </View>
            <TextInput
              multiline={true}
              className="h-24 bg-blue-200 rounded-lg p-2"
              placeholder="Bitte Text in oben ausgewählter Sprache eintragen..."
            />
            <View className="flex justify-center items-center p-1">
              <Ionicons name="arrow-down" size={24} />
            </View>
            <View className="flex flex-row gap-2 mt-3">
              <View className="bg-blue-300 h-36 w-[85%] rounded-lg">
                <Text className="p-2">
                  gfhdfjldahfjlkahfdlahhjalkdhfdaljfhjdalhkkasdjföajfkadjföadfjdköfjaöfjkdajföajföladjfkajdkfjö
                </Text>
              </View>
              <View className="flex flex-col justify-between">
                <TouchableOpacity className="bg-blue-800 rounded-full h-14 w-14 flex justify-center items-center">
                  <Ionicons name="copy-outline" size={28} color={"yellow"} />
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-800 rounded-full h-14 w-14 flex justify-center items-center">
                  <Ionicons name="share-outline" size={28} color={"yellow"} />
                </TouchableOpacity>
              </View>
            </View>
          </>
        );
    }
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      className="p-4"
      keyboardDismissMode="on-drag"
    >
      <View className="p-3">
        <SegmentedControl
          className="mb-4"
          values={["Kodieren", "Dekodieren"]}
          selectedIndex={selectedIndex}
          onChange={(event) => {
            setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
          }}
        />
        <View className="mt-3">{renderContent()}</View>
      </View>
    </ScrollView>
  );
};

export default Code;
