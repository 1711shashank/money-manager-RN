import { StyleSheet, View } from "react-native";
import AddExpenseForm from "./src/screens/AddExpenseForm";
import Home from "./src/screens/Home";

export default function App() {
    return (
        <View style={styles.container}>
            {/* <Home/> */}
            <AddExpenseForm />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1A1A",
        alignItems: "center",
    },
});
