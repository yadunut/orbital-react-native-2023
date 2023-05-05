import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Link href="/todo" asChild><Button style={styles.button} mode="contained">Todo App</Button></Link>
        <Link href="/counter" asChild><Button style={styles.button} mode="contained">Counter App</Button></Link>
        <Link href="/example2" asChild><Button style={styles.button} mode="contained">Example2</Button></Link>
        <Link href="/example3" asChild><Button style={styles.button} mode="contained">Example3</Button></Link>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  button: {
    marginTop: 10,
  }
});
