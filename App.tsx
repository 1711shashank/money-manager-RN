import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import Screen1 from "./src/test/Screen1";

export default function App() {
    return (
        <View style={styles.container}>
            <Screen1/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1A1A",
        alignItems: 'center',
    },
});
