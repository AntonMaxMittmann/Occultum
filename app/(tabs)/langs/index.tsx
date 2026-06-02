import { useRouter } from "expo-router";
import React, { useEffect, useState, useRef, useMemo } from "react";
import {
  SectionList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSearch } from "@/app/context/SearchContext";

type Language = {
  name: string;
  [key: string]: string;
};

type LanguageSection = {
  title: string;
  data: Language[];
};

const Langs = () => {
  const router = useRouter();
  const { searchText } = useSearch();
  const [allLanguages, setAllLanguages] = useState<Language[]>([]);
  const sectionListRef = useRef<SectionList>(null);

  useEffect(() => {
    const loadLanguages = async () => {
      try {
        const stored = await AsyncStorage.getItem("languages");
        if (!stored) return;

        const parsed = JSON.parse(stored) as Language[];
        setAllLanguages(parsed);
      } catch (error) {
        console.warn("Failed to load languages from AsyncStorage", error);
      }
    };

    loadLanguages();
  }, []);

  const sections = useMemo(() => {
    let filtered = allLanguages;

    if (searchText.trim()) {
      filtered = allLanguages.filter((lang) =>
        lang.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Gruppiere nach Anfangsbuchstaben
    const grouped = filtered.reduce(
      (acc, language) => {
        const firstChar = language.name.charAt(0).toUpperCase();
        const section = acc.find((s) => s.title === firstChar);
        if (section) {
          section.data.push(language);
        } else {
          acc.push({ title: firstChar, data: [language] });
        }
        return acc;
      },
      [] as LanguageSection[]
    );

    // Sortiere Sektionen alphabetisch
    grouped.sort((a, b) => a.title.localeCompare(b.title));
    return grouped;
  }, [allLanguages, searchText]);

  const handleLanguagePress = (languageName: string) => {
    router.push({
      pathname: "/(tabs)/langs/LanguageDetail",
      params: { languageName },
    });
  };

  const handleIndexPress = (title: string) => {
    const sectionIndex = sections.findIndex((s) => s.title === title);
    if (sectionIndex >= 0 && sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
        animated: true,
      });
    }
  };

  const renderLanguageItem = ({ item }: { item: Language }) => (
    <TouchableOpacity
      onPress={() => handleLanguagePress(item.name)}
      style={styles.languageItem}
    >
      <Text style={styles.languageName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section }: { section: LanguageSection }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <SectionList
        ref={sectionListRef}
        sections={sections}
        renderItem={renderLanguageItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.name}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      />

      {/* Quick-Jump Bar */}
      {!searchText && (
        <View style={styles.indexBar}>
          {sections.map((section) => (
            <TouchableOpacity
              key={section.title}
              onPress={() => handleIndexPress(section.title)}
              style={styles.indexItem}
            >
              <Text style={styles.indexText}>{section.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
  },
  sectionHeader: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  languageItem: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e0e0e0",
  },
  languageName: {
    fontSize: 16,
    color: "#000",
  },
  indexBar: {
    position: "absolute",
    right: 8,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    paddingVertical: 20,
  },
  indexItem: {
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  indexText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#004e8d",
  },
});

export default Langs;
