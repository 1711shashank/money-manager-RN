import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const LoginScreen = () => {

    const [user, setUser] = useState(null);

    GoogleSignin.configure({
        webClientId: '706023809586-m8j5kfkk3kfp5msscs9fl3nlamdcditm.apps.googleusercontent.com'
    });

    const handleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUser({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };


    return (
        <>

            <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ color: 'white', fontSize: 30 }}>Money Manager</Text>
                <View style={{ width: '90%', aspectRatio: 1, marginVertical: 80 }}>
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        source={require('../images/loginImg.png')}
                    />
                </View>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={{ width: '90%', height: 60, backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                >
                    <Image
                        style={{ width: 35, height: 35 }}
                        source={require('../images/google.png')}
                    />
                    <Text style={{ color: '#1A1A1A', fontSize: 16, fontWeight: '500', marginLeft: 10 }}>Continue with Google</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}


export default LoginScreen