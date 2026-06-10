import { ACCENT_COLOR, DANGER_COLOR } from "@/app/constants/colors";
import {
  DEFAULT_LANGUAGE_NAMES,
  getDefaultLanguages,
  Language,
} from "@/app/data/defaultLanguages";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import React from "react";
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const GITHUB_URL = "https://github.com/AntonMaxMittmann/Occultum";
const LANGUAGE_STORAGE_KEY = "languages";

const Settings = () => {
  const version = Constants.expoConfig?.version ?? "1.0.0";

  const handleReset = () => {
    Alert.alert(
      "App zurücksetzen",
      "Alle eigenen Sprachen werden gelöscht. Standard-Sprachen bleiben erhalten. Möchtest du fortfahren?",
      [
        { text: "Abbrechen", style: "cancel" },
        {
          text: "Zurücksetzen",
          style: "destructive",
          onPress: async () => {
            try {
              const stored = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
              const parsed = stored ? (JSON.parse(stored) as Language[]) : [];
              const kept = Array.isArray(parsed)
                ? parsed.filter((language) =>
                    DEFAULT_LANGUAGE_NAMES.has(language.name),
                  )
                : [];

              const keptNames = new Set(kept.map((language) => language.name));
              const restored = [
                ...kept,
                ...getDefaultLanguages().filter(
                  (language) => !keptNames.has(language.name),
                ),
              ];

              await AsyncStorage.setItem(
                LANGUAGE_STORAGE_KEY,
                JSON.stringify(restored),
              );

              Alert.alert(
                "Zurückgesetzt",
                "Alle eigenen Sprachen wurden gelöscht.",
              );
            } catch (error) {
              console.warn("Reset failed", error);
              Alert.alert(
                "Fehler",
                "Die Sprachen konnten nicht zurückgesetzt werden.",
              );
            }
          },
        },
      ],
    );
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}
    >
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Über die App</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.label}>Version</Text>
            <Text style={styles.value}>{version}</Text>
          </View>
          <TouchableOpacity
            style={[styles.row, styles.rowBorder]}
            onPress={() => Linking.openURL(GITHUB_URL)}
          >
            <Text style={styles.label}>GitHub</Text>
            <Ionicons name="logo-github" size={24} color={ACCENT_COLOR} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>App zurücksetzen</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    paddingBottom: 32,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: ACCENT_COLOR,
    marginBottom: 8,
    marginLeft: 4,
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  rowBorder: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#e0e0e0",
  },
  label: {
    fontSize: 16,
    color: "#000",
  },
  value: {
    fontSize: 16,
    color: ACCENT_COLOR,
  },
  resetButton: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: DANGER_COLOR,
  },
});

export default Settings;
