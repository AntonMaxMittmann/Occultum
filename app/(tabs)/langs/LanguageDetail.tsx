import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, FlatList, StyleSheet } from "react-native";

type Language = {
  name: string;
  [key: string]: string;
};

type AlphabetItem = {
  id: string;
  from: string;
  to: string;
};

const LanguageDetail = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const { languageName } = useLocalSearchParams<{ languageName: string }>();
  const [language, setLanguage] = useState<Language | null>(null);
  const [alphabetItems, setAlphabetItems] = useState<AlphabetItem[]>([]);

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const stored = await AsyncStorage.getItem("languages");
        if (!stored) return;

        const languages = JSON.parse(stored) as Language[];
        const found = languages.find((lang) => lang.name === languageName);
        setLanguage(found || null);

        if (found) {
          const items = Object.entries(found)
            .filter(([key]) => key !== "name")
            .map(([from, to]) => ({
              id: from,
              from,
              to: to as string,
            }));
          setAlphabetItems(items);
        }
      } catch (error) {
        console.warn("Failed to load language", error);
      }
    };

    loadLanguage();
  }, [languageName]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: languageName || "Sprache",
    });
  }, [languageName, navigation]);

  const renderAlphabetItem = ({ item }: { item: AlphabetItem }) => (
    <View style={styles.mappingItem}>
      <Text style={styles.fromChar}>{item.from}</Text>
      <Text style={styles.arrow}>→</Text>
      <Text style={styles.toChar}>{item.to}</Text>
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      <FlatList
        data={alphabetItems}
        renderItem={renderAlphabetItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        numColumns={6}
        columnWrapperStyle={styles.columnWrapper}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
    color: "#000",
  },
  columnWrapper: {
    justifyContent: "flex-start",
    marginBottom: 12,
    gap: 5,
  },
  mappingItem: {
    width: "15%",
    backgroundColor: "#f5f5f5",
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  fromChar: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  arrow: {
    fontSize: 12,
    color: "#999",
    marginVertical: 4,
  },
  toChar: {
    fontSize: 14,
    fontWeight: "600",
    color: "#004e8d",
  },
});

export default LanguageDetail;
