import 'expo-dev-client'
import Home from "./src/Home";
import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import LoginScreen from "./src/screens/LoginScreen";
import { handleLogin, signOut } from './src/utility/authHelperFunction';

const App = () => {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();


    const onAuthStateChanged = (user: any) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    if (initializing) return null;
    if (!user) return <LoginScreen handleLogin={handleLogin} />
    return <Home user={user} signOut={signOut} />
}


export default App;


