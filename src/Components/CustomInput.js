/* eslint-disable prettier/prettier */

import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from "react-native";

export default function CustomInput() {
  let [TextState, SetTextState] = useState("");

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text> {TextState}</Text>
      <TextInput
        style={{ width: 200, backgroundColor: "pink" }}
        
        onChangeText={(data) => {
          SetTextState(data)
        }}
      />
    </View>
  );
}
