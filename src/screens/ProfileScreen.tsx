import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const ProfileScreen = () => {
    return (
        <>
            <View style={{ height: '100%', width: '100%', flex: 1, backgroundColor: '#111B21' }}>

                <View style={{ paddingTop: 30, paddingLeft: 20, flexDirection: 'row', width: '100%', alignItems: 'center', marginBottom: 30 }}>
                    <Image style={{ width: 70, height: 70, borderRadius: 75, marginRight: 15 }} source={require('../images/dp.png')} />
                    <View>
                        <Text style={{ color: 'white', fontSize: 20 }}> Kumar Shashank</Text>
                        <Text style={{ color: 'gray', fontSize: 12 }}> 1711shahsank@gmail.com</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', width: '100%', alignItems: 'center', padding: 10 }}>
                        <Ionicons name="log-out-outline" size={24} color="gray" style={{ marginHorizontal: 20 }} />
                        <Text style={{ color: 'white', fontSize: 18, paddingBottom: 4 }}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default ProfileScreen