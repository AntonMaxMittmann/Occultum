import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: "Ver- und Entschlüsseln" }}
      />
      <Tabs.Screen
        name="languages"
        options={{ headerShown: false, title: "Sprachen" }}
      />
      <Tabs.Screen
        name="settings"
        options={{ headerShown: false, title: "Einstellungen" }}
      />
    </Tabs>
  );
};

export default TabsLayout;
