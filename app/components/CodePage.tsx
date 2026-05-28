import arrowDownIcon from "@/app/assets/arrow_down.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

const CodePage = () => {
  return (
    <View style={{ marginTop: 18 }}>
      <View>
        <TextInput
          style={{
            borderWidth: 0,
            padding: 10,
            backgroundColor: "#004e8d62",
            borderRadius: 5,
            height: 200,
          }}
          multiline={true}
        />
        <View style={{ alignItems: "center", marginVertical: 18 }}>
          <Image source={arrowDownIcon} style={{ width: 45, height: 45 }} />
        </View>

        <View
          style={{ display: "flex", flexDirection: "row", marginBottom: 18 }}
        >
          <View
            style={{
              width: "80%",
              height: 200,
              backgroundColor: "#004e8d62",
              borderRadius: 5,
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginLeft: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#004e8d62",
                borderRadius: 9999,
                height: 60,
                width: 60,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="share-outline" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#004e8d62",
                borderRadius: 9999,
                height: 60,
                width: 60,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="copy-outline" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CodePage;
