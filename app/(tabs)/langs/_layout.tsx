import { useSearch } from "@/app/context/SearchContext";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";

const LangsIndex = () => {
  const { setSearchText } = useSearch();
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Alle Sprachen",
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/langs/AddLanguage")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
              }}
            >
              <Ionicons size={25} name="add-outline" color="#004e8d" />
            </TouchableOpacity>
          ),
          headerLargeTitle: true,
          headerSearchBarOptions: {
            placeholder: "Sprachen durchsuchen...",
            onChangeText: (event) => {
              setSearchText(event.nativeEvent.text);
            },
          },
        }}
      />
      <Stack.Screen
        name="AddLanguage"
        options={{
          presentation: "formSheet",
          title: "Neue Sprache",
          headerShown: true,
          sheetAllowedDetents: [0.5, 1],
          sheetInitialDetentIndex: 1,
          sheetGrabberVisible: true,
        }}
      />
      <Stack.Screen
        name="LanguageDetail"
        options={{
          presentation: "modal",
          headerShown: true,
          headerShadowVisible: false,
          ...(Platform.OS !== "web" && {
            headerTransparent: true,
          }),
          headerStyle: Platform.OS !== "web" ? {
            backgroundColor: "transparent",
          } : undefined,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
              }}
            >
              <Ionicons name="checkmark-outline" size={25} color="#004e8d" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default LangsIndex;
