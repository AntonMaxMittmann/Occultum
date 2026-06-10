import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import React from "react";
import { Platform } from "react-native";

const TabsLayout = () => {
  return Platform.OS === "android" || Platform.OS === "ios" ? (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Kodieren/Dekodieren</Label>
        <Icon sf="cpu" md="code" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="langs">
        <Icon sf="globe" md="language" />
        <Label>Sprachen</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon sf="gear" md="settings" />
        <Label>Einstellungen</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  ) : (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Kodieren/Dekodieren",
          tabBarIcon: ({ color }) => (
            <Ionicons name="code" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="langs"
        options={{
          headerShown: false,
          title: "Sprachen",
          tabBarIcon: ({ color }) => (
            <Ionicons name="language" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: "Einstellungen",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
