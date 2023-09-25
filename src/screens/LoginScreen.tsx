import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const LoginScreen = ({ handleLogin }: any) => {

    return (
        <>

            <View style={{ width: '100%', height: '100%', alignItems: 'center', backgroundColor: '#1A1A1A', justifyContent: 'center', }}>
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