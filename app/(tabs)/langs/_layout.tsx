import { ACCENT_COLOR } from "@/app/constants/colors";
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
              hitSlop={10}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                marginLeft: 2,
              }}
            >
              <Ionicons size={26} name="add-outline" color={ACCENT_COLOR} />
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
          headerShadowVisible: false,
          title: "Neue Sprache",
          headerShown: true,
          sheetAllowedDetents: [0.5, 1],
          sheetInitialDetentIndex: 1,
          sheetGrabberVisible: false,
        }}
      />
      <Stack.Screen
        name="LanguageDetail"
        options={{
          presentation: Platform.OS === "web" ? "card" : "modal",
          headerShown: true,
          headerShadowVisible: false,
          ...(Platform.OS !== "web" && {
            headerTransparent: true,
          }),
          headerStyle:
            Platform.OS !== "web"
              ? {
                  backgroundColor: "transparent",
                }
              : undefined,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              hitSlop={10}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                marginLeft: 2.5,
              }}
            >
              <Ionicons name="checkmark-outline" size={26} color={ACCENT_COLOR} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default LangsIndex;
