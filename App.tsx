import { StyleSheet, View } from "react-native";
import Home from "./src/Home";
import CardScreen from "./src/screens/CardScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/Tab';


export default function App() {
    return (
        <NavigationContainer >
            <Tab />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1A1A",
        alignItems: 'center',
    },
});


