import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { calculateString } from '../utility/helperFunction';

const KeyPad = ({ matrixValues, amount, handleSubmit, handleBackPress, setAmount, handleNumberPress }: any) => {

    const handleKeyPress = (value: string) => {
        if (value === 'submit') {
            if (amount.includes('+') || amount.includes('-')) {
                setAmount(calculateString(amount));
            } else {
                handleSubmit();
            }
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
                                        ? amount.includes('+') || amount.includes('-')
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
