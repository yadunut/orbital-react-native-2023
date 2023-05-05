import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function TodoScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text>Hello there</Text>
                <Link href="/" asChild>
                    <Button mode="contained">Go to root</Button>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    }
})