import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
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
    </Tabs>
  );
};

export default TabsLayout;
