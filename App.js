import { StyleSheet, Text, View } from "react-native";
import 'expo-dev-client'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import Home from "./src/Home";
import CardScreen from "./src/screens/CardScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/Tab';
import auth from '@react-native-firebase/auth';
import { useState, useEffect } from 'react';
import { Image } from "react-native";
import { Button } from "react-native";



export default function App() {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    GoogleSignin.configure({
        webClientId: '293357260144-oeuoul1beohic83lmo2imhmbg77a0ehs.apps.googleusercontent.com',
    });


    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    const onGoogleButtonPress = async () => {

        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const userData = auth().signInWithCredential(googleCredential);

        userData.then((user) => {
            console.log(user);
        }).catch((err) => {
            console.log(err);
        })


    }

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await auth().signOut();
        } catch (error) {
            console.log(error);
        }
    }

    if (initializing) return null;

    if (!user) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <GoogleSigninButton
                    style={{ width: 300, height: 65 }}
                    onPress={onGoogleButtonPress}
                />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text> {user.displayName}</Text>
            <Image
                source={{ uri: user.photoURL }}
                style={{ width: 300, height: 300 }}
            />
            <Button title='sign Out' onPress={signOut} />

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


