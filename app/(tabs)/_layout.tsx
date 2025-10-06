import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Ver- und Entschlüsseln",
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-lock" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="languages"
        options={{
          headerShown: false,
          title: "Sprachen",
          tabBarIcon: ({ color }) => (
            <Ionicons name="language" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: "Einstellungen",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
