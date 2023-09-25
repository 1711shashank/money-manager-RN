import React from 'react'
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';



const ProfileScreen = ({ profileModal, setProfileModal, user, signOut }: any) => {
    return (
        <>
            <Modal
                // animationType="slide"
                transparent={true}
                visible={profileModal}
                onRequestClose={() => { setProfileModal(false) }}
            >

                <View style={{ height: '100%', width: '100%', flex: 1, backgroundColor: '#1A1A1A' }}>

                    <View style={{ backgroundColor: '#2c2c2c', paddingVertical: 15, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setProfileModal(false)} >
                            <Ionicons name="arrow-back-sharp" size={24} color="white" style={{ marginLeft: 20, paddingTop: 4 }} />
                        </TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 20, marginLeft: 10 }}> Profile</Text>
                    </View>

                    <View style={{ paddingTop: 30, paddingLeft: 20, flexDirection: 'row', width: '100%', alignItems: 'center', marginBottom: 40 }}>
                        <Image style={{ width: 70, height: 70, borderRadius: 75, marginRight: 15 }} source={{ uri: user.photoURL }} />
                        <View>
                            <Text style={{ color: 'white', fontSize: 20 }}> {user.displayName}</Text>
                            <Text style={{ color: 'gray', fontSize: 12 }}> {user.email}</Text>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => setProfileModal(false)} style={{ flexDirection: 'row', width: '100%', alignItems: 'center', padding: 10 }}>
                            <Entypo name="home" size={24} color="gray" style={{ marginHorizontal: 20 }} />
                            <Text style={{ color: 'white', fontSize: 18, paddingBottom: 4 }}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={signOut} style={{ flexDirection: 'row', width: '100%', alignItems: 'center', padding: 10 }}>
                            <Ionicons name="log-out-outline" size={24} color="gray" style={{ marginHorizontal: 20 }} />
                            <Text style={{ color: 'white', fontSize: 18, paddingBottom: 4 }}>Sign out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default ProfileScreen