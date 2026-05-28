import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

type Language = {
  name: string;
  [key: string]: string;
};

const createCaesarLanguage = (shift: number): Language => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const mapping: Language = { name: `Caesar-Verschlüsselung: ${shift}` };

  alphabet.split("").forEach((letter, index) => {
    mapping[letter] = alphabet[(index + shift) % 26];
  });

  return mapping;
};

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

  const languages = [
    {
      name: "Entgegensetzes Alphabet",
      a: "z",
      b: "y",
      c: "x",
      d: "w",
      e: "v",
      f: "u",
      g: "t",
      h: "s",
      i: "r",
      j: "q",
      k: "p",
      l: "o",
      m: "n",
      n: "m",
      o: "l",
      p: "k",
      q: "j",
      r: "i",
      s: "h",
      t: "g",
      u: "f",
      v: "e",
      w: "d",
      x: "c",
      y: "b",
      z: "a",
    },
    ...Array.from({ length: 25 }, (_, index) =>
      createCaesarLanguage(index + 1),
    ),
  ];

  useEffect(() => {
    const initLanguages = async () => {
      try {
        const stored = await AsyncStorage.getItem("languages");
        const parsed = stored ? JSON.parse(stored) : null;
        const shouldWrite =
          !Array.isArray(parsed) ||
          parsed.length !== languages.length ||
          parsed.some((item: any) => typeof item?.name !== "string");

        if (shouldWrite) {
          await AsyncStorage.setItem("languages", JSON.stringify(languages));
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
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
