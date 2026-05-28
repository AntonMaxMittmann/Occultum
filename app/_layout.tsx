import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

const RootLayout = () => {
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
  ];

  useEffect(() => {
    const initLanguages = async () => {
      try {
        const stored = await AsyncStorage.getItem("languages");
        if (!stored) {
          await AsyncStorage.setItem("languages", JSON.stringify(languages));
        }
      } catch (error) {
        console.warn("AsyncStorage init failed", error);
      }
    };

    initLanguages();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
