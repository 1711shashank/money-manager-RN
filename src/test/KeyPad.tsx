import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { calculateString } from '../utility/helperFunction';

const KeyPad = ({ messageText, matrixValues, amountString, setAmountString, handleSubmit, handleBackPress, handleNumberPress }: any) => {

    const handleKeyPress = (value: string) => {
        if (value === 'submit') {

            if (amountString.endsWith('+') || amountString.endsWith('-') || amountString.endsWith('*')) {
                setAmountString(amountString.slice(0, -1) + value);
            }
            else if (amountString.includes('+') || amountString.includes('-') || amountString.includes('*')) {
                setAmountString(calculateString(amountString));
            }
            else if (messageText.trim() === "" || (Number(amountString) <= 0 || isNaN(Number(amountString)))) {
                Alert.alert("Please fill both Amount and Memo fields.");
            }
            else handleSubmit();

        } else if (value === '+' || value === '-' || value === '*') {

            if (amountString.endsWith('+') || amountString.endsWith('-') || amountString.endsWith('*')) {
                setAmountString(amountString.slice(0, -1) + value);
            }
            else if (amountString.includes('+') || amountString.includes('-') || amountString.endsWith('*')) {
                setAmountString((prevAmount: string) => calculateString(prevAmount) + value);
            }
            else handleNumberPress(value);

        } else if (value === 'backspace') {
            handleBackPress();
        } else {
            handleNumberPress(value);
        }
    };

    return (
        <>
            <View style={{ backgroundColor: '#242424' }}>
                {matrixValues.map((row: any) => (
                    <View style={styles.keypadRow} key={row.join('')}>
                        {row.map((value: any) => (
                            <TouchableOpacity
                                style={styles.key}
                                key={value}
                                onPress={() => handleKeyPress(value)}
                            >
                                {
                                    value === 'submit'
                                        ? (amountString.includes('+') || amountString.includes('-') || amountString.includes('*') && !(amountString.endsWith('+') || amountString.endsWith('-') || amountString.endsWith('*')))
                                            ? <Text style={styles.keyText}>{"="}</Text>
                                            : <MaterialIcons name="check" size={30} color="white" />
                                        : value === 'backspace'
                                            ? <Ionicons name="backspace-outline" size={25} color="white" />
                                            : <Text style={styles.keyText}>{value}</Text>
                                }
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </>
    );
};

const styles = StyleSheet.create({

    keypadRow: {
        flexDirection: 'row',
    },
    key: {
        width: '25%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    keyText: {
        color: 'white',
        fontSize: 20,
    },
});

export default KeyPad;
