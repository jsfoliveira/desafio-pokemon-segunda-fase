import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const App = () => {
  const [text, onChangeText] = React.useState("Buscar pokemon");


  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign:"center",
    height: 40,
    marginVertical: 100,
    marginHorizontal: 500,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;