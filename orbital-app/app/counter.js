const { useState } = require("react");
const { View, StyleSheet } = require("react-native");
const { Text, Button } = require("react-native-paper");

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  }
  const decrementCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button style={styles.button} mode="contained" onPress={() => incrementCounter()}>Increment Counter</Button>
      <Button style={styles.button} mode="contained" onPress={() => decrementCounter()}>Decrement Counter Counter</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  button: {
    margin: 10,
  }
});
