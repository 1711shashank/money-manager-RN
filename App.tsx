import { StyleSheet, View } from "react-native";
import AddExpenseForm from "./src/screens/AddExpenseForm";

export default function App() {
    return (
        <View style={styles.container}>
            <AddExpenseForm />
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
