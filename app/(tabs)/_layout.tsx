import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "darkblue" }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Kodieren/Dekodieren",
          tabBarIcon: () => <Ionicons name="" />,
        }}
      />
      <Tabs.Screen
        name="fonts"
        options={{
          headerShown: false,
          title: "Geheimschriften",
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
