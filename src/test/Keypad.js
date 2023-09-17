// Keypad.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Keypad = ({ inputValue, handleNumberPress, handleBackPress }) => {
    const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', 'Back'];

    return (
        <View style={styles.keypad}>
            {buttons.map((button, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.key}
                    onPress={() => {
                        if (button === 'Back') {
                            handleBackPress();
                        } else {
                            handleNumberPress(button);
                        }
                    }}>
                    <Text style={styles.keyText}>{button}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    keypad: {
        marginTop: 10,
    },
    key: {
        width: 70,
        height: 70,
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5,
    },
    keyText: {
        color: 'white',
        fontSize: 20,
    },
});

export default Keypad;
