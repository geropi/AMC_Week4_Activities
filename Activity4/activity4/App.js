import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";



const App = () => {

  const initialData = [
    { id: "1", text: "Do the dishes.", checked: false },
    { id: "2", text: "Wash clothes.", checked: false },
    { id: "3", text: "Make breakfast.", checked: false },
    { id: "4", text: "Do my assignments.", checked: false },
    { id: "5", text: "Iron my ojt uniform.", checked: false },
    { id: "6", text: "Pray.", checked: false },
    { id: "7", text: "Help mom walk outside.", checked: false },
    { id: "8", text: "Feed the dogs.", checked: false },
    { id: "9", text: "Walk the dog outside.", checked: false },
    { id: "10", text: "Take a bath.", checked: false },
  ];

  // Tracking of items
  const [items, setItems] = useState(initialData);

  // Toggle checkbox
  const toggleCheckbox = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // Calculate checked and unchecked items
  const checkedCount = items.filter((item) => item.checked).length;
  const uncheckedCount = items.length - checkedCount;
  const colors = ['blue','red','yellow','purple','orange','green','brown','violet'];
  return (
    <View style={{ flex: 1, padding: 20 }}>
       <Text style={{ fontSize: 36, fontWeight: "bold", marginBottom: 20,  }}>
        My To Do List!
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
      
        To Do: {checkedCount} | Pending: {uncheckedCount}
      </Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => toggleCheckbox(item.id)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              borderBottomWidth: 1,
              borderColor: "violet",
              backgroundColor: item.checked ? "black" : colors[index % colors.length],
            }}
          >
            <Checkbox
              status={item.checked ? "checked" : "unchecked"}
              onPress={() => toggleCheckbox(item.id)}
            />
            <Text style={{
                marginLeft: 10,
                fontSize: 16,
                fontWeight: "bold",
                color: item.checked ? "white" : "black"}}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default App;
