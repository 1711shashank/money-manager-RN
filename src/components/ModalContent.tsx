import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ModalContent = ({ inputValue, messageText, onMessageTextChange }: any) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.messageInput}
                placeholder='Message'
                value={messageText}
                onChangeText={onMessageTextChange}
            />
            <Text style={styles.inputValue}>{inputValue}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
    },
    messageInput: {
        fontSize: 16,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    inputValue: {
        fontSize: 20,
        textAlign: 'right',
    },
});

export default ModalContent;
