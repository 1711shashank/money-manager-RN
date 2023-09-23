import { StyleSheet, View } from "react-native";
import Home from "./src/Home";
import CardScreen from "./src/screens/CardScreen";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
    return (
        <View style={styles.container}>
            {/* <Home /> */}
            {/* <CardScreen/> */}
            <LoginScreen />
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


