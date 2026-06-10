import { ACCENT_COLOR, DANGER_COLOR } from "@/app/constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const LANGUAGE_STORAGE_KEY = "languages";

type Language = {
  name: string;
  [key: string]: string;
};

type AlphabetItem = {
  id: string;
  from: string;
  to: string;
};

const LanguageDetail = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const { languageName } = useLocalSearchParams<{ languageName: string }>();
  const [alphabetItems, setAlphabetItems] = useState<AlphabetItem[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const stored = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (!stored) return;

        const languages = JSON.parse(stored) as Language[];
        const found = languages.find((lang) => lang.name === languageName);

        if (found) {
          const items = Object.entries(found)
            .filter(([key]) => key !== "name")
            .map(([from, to]) => ({
              id: from,
              from,
              to: to as string,
            }));
          setAlphabetItems(items);
        }
      } catch (error) {
        console.warn("Failed to load language", error);
      }
    };

    loadLanguage();
  }, [languageName]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: languageName || "Sprache",
    });
  }, [languageName, navigation]);

  const handleDelete = () => {
    if (!languageName || isDeleting) return;

    Alert.alert(
      "Sprache löschen",
      `„${languageName}" wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.`,
      [
        { text: "Abbrechen", style: "cancel" },
        {
          text: "Löschen",
          style: "destructive",
          onPress: async () => {
            setIsDeleting(true);
            try {
              const stored = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
              if (!stored) return;

              const languages = JSON.parse(stored) as Language[];
              const updated = languages.filter(
                (lang) => lang.name !== languageName,
              );

              await AsyncStorage.setItem(
                LANGUAGE_STORAGE_KEY,
                JSON.stringify(updated),
              );
              router.back();
            } catch (error) {
              console.warn("Failed to delete language", error);
              Alert.alert("Fehler", "Die Sprache konnte nicht gelöscht werden.");
            } finally {
              setIsDeleting(false);
            }
          },
        },
      ],
    );
  };

  const renderAlphabetItem = ({ item }: { item: AlphabetItem }) => (
    <View style={styles.mappingItem}>
      <Text style={styles.fromChar}>{item.from}</Text>
      <Text style={styles.arrow}>→</Text>
      <Text style={styles.toChar}>{item.to}</Text>
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      <FlatList
        data={alphabetItems}
        renderItem={renderAlphabetItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        numColumns={6}
        columnWrapperStyle={styles.columnWrapper}
      />

      <TouchableOpacity
        onPress={handleDelete}
        disabled={isDeleting}
        style={[styles.deleteButton, isDeleting && styles.deleteButtonDisabled]}
      >
        <Text style={styles.deleteButtonText}>
          {isDeleting ? "Wird gelöscht…" : "Sprache löschen"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
    color: "#000",
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
  toChar: {
    fontSize: 14,
    fontWeight: "600",
    color: ACCENT_COLOR,
  },
  deleteButton: {
    marginTop: 32,
    marginBottom: 24,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: DANGER_COLOR,
    alignItems: "center",
  },
  deleteButtonDisabled: {
    opacity: 0.5,
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: DANGER_COLOR,
  },
});

export default LanguageDetail;
