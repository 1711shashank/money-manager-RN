import React from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

const ModalHeader = ({ amount, setMessageText }:any) => {
    return (
        <>
            <View style={styles.modalHeader}>
                <TextInput style={styles.messageInput} placeholder='Message' onChangeText={(text) => setMessageText(text)} />
                <Text style={styles.amount}>{amount}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    modalHeader: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#242424',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    messageInput: {
        flex: 2,
        marginLeft: 10,
        fontSize: 16,
        color: 'white',
    },
    amount: {
        flex: 1,
        color: 'white',
        textAlign: 'right',
        marginRight: 5,
        fontSize: 20,
    },

})

export default ModalHeader