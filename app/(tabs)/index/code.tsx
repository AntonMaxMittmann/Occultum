import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Alert,
  Share,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const CodeComponent = () => {
  const data = {
    a: "┌",
    b: "┬",
    c: "┐",
    d: "├",
    e: "┼",
    f: "┤",
    g: "└",
    h: "┴",
    i: "┘",
    j: "╭",
    k: "╮",
    l: "╯",
    m: "╰",
    n: "⊢",
    o: "⊣",
    p: "⊤",
    q: "⊥",
    r: "⋅",
    s: "^",
    t: "v",
    u: "<",
    v: ">",
    w: "△",
    x: "▽",
    y: "◁",
    z: "▷",
  };

  const [translation, setTranslation] = useState("");
  const [text, setText] = useState("");
  const share = async () => {
    try {
      const result = await Share.share({
        message: translation,
      });

      if (result.action === Share.sharedAction) {
        console.log("Erfolgreich geteilt!");
      } else if (result.action === Share.dismissedAction) {
        console.log("Teilen abgebrochen");
      }
    } catch (error) {
      console.log("Fehler beim Teilen:", error.message);
    }
  };

  return (
    <View className="flex flex-col">
      <TextInput
        placeholder="Text in normaler Schrift..."
        className="bg-blue-200 p-2 rounded-xl h-28"
        multiline={true}
        value={text}
        onChangeText={(value) => {
          setText(value);

          // Übersetzung sofort durchführen
          const translatedText = value
            .split("")
            .map((char) => data[char.toLowerCase()] || char)
            .join("");

          setTranslation(translatedText);
        }}
        scrollEnabled={true}
        autoCorrect={true}
      />

      <View className="flex items-center m-2">
        <Ionicons name="arrow-down" size={24} />
      </View>
      <View className="bg-blue-200 p-2 rounded-xl">
        <View>
          <Picker>
            <Picker.Item label="Zeichencode" />
          </Picker>
        </View>
        <View className="flex flex-row">
          <View className="w-[80%] flex flex-row">
            <Text>{translation}</Text>
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
              onPress={share}
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
