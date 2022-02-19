
import { useState } from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import catandmartha from './assets/cat_and-martha.jpg';




export default function App() {
  //State to change text
  const [outputText, setOutputText] = useState('Hello Martha!');

  
  return (
    <View style={styles.container}>
    <Image source={catandmartha} testID= "catAndMarthaImage" style={{ width: 305, height: 305 }} />
      <Text style={{color:'#FEDD00', fontSize: 36}}>{outputText}</Text>
      <Button
        title="Change text"
        onPress={() => setOutputText("You clicked me!")}
      />
      <Text>"Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FB48C4",
    alignItems: "center",
    justifyContent: "center",
  },
});

