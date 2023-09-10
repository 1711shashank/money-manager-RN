import { StyleSheet, View } from "react-native";
import AddExpenses from "./src/screens/AddExpenses";

export default function App() {
    return (
        <View style={styles.container}>
            <AddExpenses />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111B21",
        alignItems: "center",
        justifyContent: "center",
    },
});
