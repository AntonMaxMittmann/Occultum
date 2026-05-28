import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import * as Clipboard from "expo-clipboard";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Platform,
  Share,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LANGUAGE_STORAGE_KEY = "languages";

type Language = {
  name: string;
  [key: string]: string;
};

const translateText = (text: string, language?: Language) => {
  if (!language) return "";

  return text
    .split("")
    .map((char) => {
      const lower = char.toLowerCase();
      const mapped = language[lower];
      return mapped ?? char;
    })
    .join("");
};

const CodePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<
    string | undefined
  >();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("Test");

  const handleShare = async () => {
    try {
      await Share.share({
        message: result || "",
      });
    } catch (error) {
      console.warn("Share failed", error);
    }
  };

  const handleCopy = async () => {
    try {
      if (
        Platform.OS === "web" &&
        typeof navigator?.clipboard?.writeText === "function"
      ) {
        await navigator.clipboard.writeText(result || "");
      } else {
        await Clipboard.setStringAsync(result || "");
      }
      Alert.alert("Kopiert", "Der Text wurde in die Zwischenablage kopiert.");
    } catch (error) {
      console.warn("Copy failed", error);
    }
  };

  useEffect(() => {
    const loadLanguages = async () => {
      try {
        const stored = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (!stored) return;

        const parsed = JSON.parse(stored) as Language[];
        setLanguages(parsed);
        if (parsed.length > 0 && !selectedLanguage) {
          setSelectedLanguage(parsed[0].name);
        }
      } catch (error) {
        console.warn("Failed to load languages from AsyncStorage", error);
      }
    };

    loadLanguages();
  }, []);

  useEffect(() => {
    const currentLanguage = languages.find(
      (language) => language.name === selectedLanguage,
    );
    setResult(translateText(inputText, currentLanguage));
  }, [inputText, selectedLanguage, languages]);

  return (
    <View style={{ marginTop: 18 }}>
      <View>
        <TextInput
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          style={{
            borderWidth: 0,
            padding: 10,
            backgroundColor: "#004e8d62",
            borderRadius: 5,
            height: 200,
            color: "#000",
          }}
          multiline={true}
        />
        <View style={{ alignItems: "center", marginVertical: 18 }}>
          <Image
            source={require("../assets/arrow_down.png")}
            style={{ width: 45, height: 45 }}
          />
        </View>
        <View style={{ paddingLeft: 30, paddingRight: 30, marginVertical: 16 }}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
            style={{ height: 38, width: "100%" }}
            itemStyle={{ fontSize: 14, height: 38 }}
          >
            {languages.length === 0 ? (
              <Picker.Item label="Keine Sprachen gefunden" value="" />
            ) : (
              languages.map((language) => (
                <Picker.Item
                  key={language.name}
                  label={language.name}
                  value={language.name}
                />
              ))
            )}
          </Picker>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 18,
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              width: "80%",
              height: 200,
              backgroundColor: "#004e8d62",
              borderRadius: 5,
            }}
          >
            <Text style={{ padding: 10 }}>{result}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginLeft: 10,
              height: 200,
            }}
          >
            <TouchableOpacity
              onPress={handleShare}
              style={{
                backgroundColor: "#004e8d62",
                borderRadius: 9999,
                height: 60,
                width: 60,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="share-outline" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCopy}
              style={{
                backgroundColor: "#004e8d62",
                borderRadius: 9999,
                height: 60,
                width: 60,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="copy-outline" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CodePage;
