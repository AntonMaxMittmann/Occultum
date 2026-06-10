import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { ACCENT_COLOR, FIELD_COLOR } from "@/app/constants/colors";
import { ALPHABET } from "@/app/data/defaultLanguages";

const LANGUAGE_STORAGE_KEY = "languages";

type Language = {
  name: string;
  [key: string]: string;
};

type AlphabetItem = {
  id: string;
  from: string;
};

const AddLanguage = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [mappings, setMappings] = useState<Record<string, string>>(() =>
    Object.fromEntries(ALPHABET.map((letter) => [letter, ""])),
  );
  const [isSaving, setIsSaving] = useState(false);

  const alphabetItems = useMemo<AlphabetItem[]>(
    () => ALPHABET.map((letter) => ({ id: letter, from: letter })),
    [],
  );

  const handleSave = useCallback(async () => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      Alert.alert("Name fehlt", "Bitte gib einen Namen für die Sprache ein.");
      return;
    }

    const missingLetters = ALPHABET.filter(
      (letter) => !mappings[letter]?.trim(),
    );
    if (missingLetters.length > 0) {
      Alert.alert(
        "Zuordnungen unvollständig",
        "Bitte fülle alle Buchstaben-Zuordnungen aus.",
      );
      return;
    }

    setIsSaving(true);
    try {
      const stored = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
      const languages: Language[] = stored ? JSON.parse(stored) : [];

      if (languages.some((lang) => lang.name === trimmedName)) {
        Alert.alert(
          "Name bereits vergeben",
          "Eine Sprache mit diesem Namen existiert bereits.",
        );
        return;
      }

      const newLanguage: Language = { name: trimmedName };
      ALPHABET.forEach((letter) => {
        newLanguage[letter] = mappings[letter].trim();
      });

      languages.push(newLanguage);
      await AsyncStorage.setItem(
        LANGUAGE_STORAGE_KEY,
        JSON.stringify(languages),
      );
      router.back();
    } catch (error) {
      console.warn("Failed to save language", error);
      Alert.alert("Fehler", "Die Sprache konnte nicht gespeichert werden.");
    } finally {
      setIsSaving(false);
    }
  }, [name, mappings, router]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={handleSave}
          disabled={isSaving}
          hitSlop={10}
          style={styles.headerButton}
        >
          <Ionicons
            name="checkmark-outline"
            size={26}
            color={isSaving ? FIELD_COLOR : ACCENT_COLOR}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, handleSave, isSaving]);

  const updateMapping = (letter: string, value: string) => {
    let normalized = value
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/Ä/g, 'AE')
      .replace(/Ö/g, 'OE')
      .replace(/Ü/g, 'UE');

    setMappings((prev) => ({
      ...prev,
      [letter]: normalized.slice(0, 2),
    }));
  };

  const renderAlphabetItem = ({ item }: { item: AlphabetItem }) => (
    <View style={styles.mappingItem}>
      <Text style={styles.fromChar}>{item.from}</Text>
      <Text style={styles.arrow}>→</Text>
      <TextInput
        value={mappings[item.from]}
        onChangeText={(text) => updateMapping(item.from, text)}
        maxLength={1}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.toInput}
        placeholder="?"
        placeholderTextColor="#bbb"
      />
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
    >
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name der Sprache"
        placeholderTextColor="#999"
        style={styles.nameInput}
        autoCapitalize="words"
        returnKeyType="done"
      />

      <FlatList
        data={alphabetItems}
        renderItem={renderAlphabetItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        numColumns={6}
        columnWrapperStyle={styles.columnWrapper}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#fff",
  },
  nameInput: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 20,
  },
  columnWrapper: {
    justifyContent: "flex-start",
    marginBottom: 12,
    gap: 5,
  },
  mappingItem: {
    width: "15%",
    backgroundColor: "#f5f5f5",
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  fromChar: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  arrow: {
    fontSize: 12,
    color: "#999",
    marginVertical: 4,
  },
  toInput: {
    fontSize: 16,
    fontWeight: "600",
    color: ACCENT_COLOR,
    minWidth: 20,
    padding: 0,
    textAlign: "center",
  },
  headerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    marginLeft: 6,
  },
});

export default AddLanguage;
