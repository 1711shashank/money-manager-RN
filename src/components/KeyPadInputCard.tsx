import React from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

const KeyPadInputCard = ({ amountString, setMessageText, setTextInputFocused }: any) => {
    return (
        <>
            <View style={styles.KeyPadInputCard}>
                <TextInput
                    style={styles.messageInput}
                    onFocus={() => setTextInputFocused(true)}
                    onChangeText={(text) => setMessageText(text)}
                    placeholder='Message*'
                    placeholderTextColor="gray"
                />
                <Text style={styles.amount}>{amountString}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    KeyPadInputCard: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#242424',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    messageInput: {
        flex: 1,
        marginLeft: 15,
        fontSize: 14,
        color: 'white',
    },
    amount: {
        flex: 1,
        color: 'white',
        textAlign: 'right',
        marginRight: 5,
        fontSize: 22,
    },

})

export default KeyPadInputCard