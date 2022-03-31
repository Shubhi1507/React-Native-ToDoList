import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomInput from "./src/Components/CustomInput";
import HelloWorld from "./src/Components/HelloWorld";
import ToDoList from "./src/Components/Screen/ToDoList";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      <View
        style={{
          flex: 1,
    
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <ToDoList />
      </View>
    </SafeAreaView>
  );
};
const customStyle = StyleSheet.create({
  style1: { padding: 20 },
  style2: { backgroundColor: "orange" },
  style3: { margin: 30 },
});

export default App;
