import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SearchProvider } from "./context/SearchContext";
import {
  getDefaultLanguages,
  REMOVED_DEFAULT_LANGUAGE_NAMES,
} from "./data/defaultLanguages";

const RootLayout = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadIcons = async () => {
      try {
        if (typeof Ionicons.loadFont === "function") {
          await Ionicons.loadFont();
        }
      } catch (error) {
        console.warn("Ionicons font load failed", error);
      } finally {
        setFontsLoaded(true);
      }
    };

    loadIcons();
  }, []);

  useEffect(() => {
    const initLanguages = async () => {
      try {
        const stored = await AsyncStorage.getItem("languages");
        const parsed = stored ? JSON.parse(stored) : null;
        const shouldWrite =
          !Array.isArray(parsed) ||
          parsed.length === 0 ||
          parsed.some((item: any) => typeof item?.name !== "string");

        const defaults = getDefaultLanguages();

        if (shouldWrite) {
          await AsyncStorage.setItem("languages", JSON.stringify(defaults));
        } else {
          const refreshedZiffern = defaults.find(
            (language) => language.name === "Ziffern",
          );
          const cleaned = parsed
            .filter(
              (language: { name: string }) =>
                !REMOVED_DEFAULT_LANGUAGE_NAMES.has(language.name),
            )
            .map((language: { name: string }) =>
              language.name === "Ziffern" && refreshedZiffern
                ? refreshedZiffern
                : language,
            );
          const existingNames = new Set(
            cleaned.map((language: { name: string }) => language.name),
          );
          const missing = defaults.filter(
            (language) => !existingNames.has(language.name),
          );
          const nextLanguages = [...cleaned, ...missing];

          if (JSON.stringify(nextLanguages) !== JSON.stringify(parsed)) {
            await AsyncStorage.setItem(
              "languages",
              JSON.stringify(nextLanguages),
            );
          }
        }
      } catch (error) {
        console.warn("AsyncStorage init failed", error);
      }
    };

    initLanguages();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SearchProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SearchProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
