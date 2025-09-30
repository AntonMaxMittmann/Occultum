import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="fonts" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
};

export default TabsLayout;
