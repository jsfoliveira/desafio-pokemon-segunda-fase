import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";

const App = () => {
  const [text, onChangeText] = React.useState("Buscar pokemon");


  return (
    <View style={styles.container}>
      <Image
        alt="logo"
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png',
        }}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 60,
    paddingVertical:50,
  },

  input: {
    textAlign:"center",
    height: 40,
    marginVertical: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },

  logo: {
    textAlign:"center",
    width: 280,
    height: 100,
  }

});

export default App;