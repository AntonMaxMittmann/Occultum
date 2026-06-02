import { useSearch } from "@/app/context/SearchContext";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, Platform } from "react-native";

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
              <Ionicons name="checkmark" size={28} color="#004e8d" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default LangsIndex;
