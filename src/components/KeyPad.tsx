import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const KeyPad = ({ matrixValues, submitIcon, handleSave, handleBackPress, handleCalculate, handleNumberPress }: any) => {
    return (
        <>
            <View style={styles.keypad}>
                {matrixValues.map((row: any, rowIndex: any) => (
                    <View key={rowIndex} style={styles.keypadRow}>
                        {row.map((value: any, colIndex: any) => (
                            <TouchableOpacity
                                key={colIndex}
                                style={styles.key}
                                onPress={() => {
                                    if (value === 'datepicker') {
                                        // Open date picker here
                                    } else if (value === 'submit') {
                                        handleSave();
                                    } else if (value === 'backspace') {
                                        handleBackPress();
                                    } else if (value === '=') {
                                        handleCalculate();
                                    } else {
                                        handleNumberPress(value);
                                    }
                                }}>
                                {value === 'backspace' ? (
                                    <MaterialIcons name="backspace" size={20} color="white" />
                                ) : value === 'submit' ? (
                                    <MaterialIcons name={submitIcon} size={24} color="white" />
                                ) : (
                                    <Text style={styles.keyText}>{value}</Text>
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </>
    )
}


const styles = StyleSheet.create({

    keypad: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    keypadRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    key: {
        backgroundColor: '#242424',
        width: '25%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    datePickerButton: {
        backgroundColor: 'lightblue',
    },
    keyText: {
        color: 'white',
        fontSize: 20,
    },


});

export default KeyPad