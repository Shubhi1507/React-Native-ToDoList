import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

export default function ToDoList() {
  let [ToDoListState, SetToDoListState] = useState([]);
  let [TextState, SetTextState] = useState("");

  function addTodoList() {
    if (TextState) {
      let TempArray = [...ToDoListState];
      TempArray.push(TextState);
      SetToDoListState(TempArray);
      console.log(TempArray);
      SetTextState("");
    } else {
    }
  }
  function removefromList(index) {
    console.log(index);
    let TempArray3 = [...ToDoListState];
    TempArray3.splice(index, 1);
    SetToDoListState(TempArray3);
  }
  const renderItem = ({ item, index }) => (
    <View
      style={{
        paddingVertical: 5,
        paddingHorizontal: 7,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item}</Text>
      <TouchableOpacity
        onPress={() => {
          removefromList(index);
        }}
      >
        <Image
          source={require("../../Assets/Close.png")} //We use "require ("PATH")" when img is available locally , else we use {uri: URL} for img URLs.
          style={{ height: 20, width: 20 }}
        />

        {/* //  TouchableOpacity is used for View , text , img , audio , video */}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          //   alignSelf: "flex-start",
          backgroundColor: "olive",
        }}
      >
          <Text style={{ backgroundColor:"black" , fontWeight :"bold" , fontSize:30 , textAlign:"center" }}>
              TO-DO LIST 
          </Text>
        <View style={{ flexDirection: "row" , backgroundColor: "red" }}>
          <TextInput
            value={TextState}
            style={{
              width: 200,
              backgroundColor: "teal",
            }}
            onChangeText={(data) => {
              SetTextState(data);
            }}
          />
          <Button color="black" title="Press" onPress={() => addTodoList()} />
        </View>
        <FlatList
          style={{ flex: 1 }} //List Rendering
          data={ToDoListState}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
