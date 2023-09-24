import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Platform, Keyboard } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { calculateString } from '../../utility/helperFunction';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


const KeyPad = ({ messageText, matrixValues, date, setDate, amountString, setAmountString, handleSubmit, handleBackPress, handleNumberPress }: any) => {

    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    };

    const handleKeyPress = (value: string) => {

        if (value === 'date') {
            toggleDatePicker();
        } else if (value === 'submit') {

            if (amountString.includes('+') || amountString.includes('-') || amountString.includes('*')) {
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
            else if (amountString.includes('+') || amountString.includes('-') || amountString.includes('*')) {
                setAmountString((prevAmount: string) => calculateString(prevAmount) + value);
            }
            else handleNumberPress(value);

        } else if (value === 'backspace') {
            handleBackPress();
        } else {
            handleNumberPress(value);
        }
    };

    const KeyPadHandler = ({ value }: any) => {

        let keyContent;

        switch (value) {
            case 'submit':
                keyContent = amountString.includes('+') || amountString.includes('-') || amountString.includes('*')
                    ? <Text style={styles.keyText}>=</Text>
                    : <MaterialIcons name="check" size={30} color="white" />;
                break;

            case 'backspace':
                keyContent = <Ionicons name="backspace-outline" size={25} color="white" />;
                break;

            case 'date':
                keyContent = (
                    <>
                        <Text style={{ fontSize: 14, color: 'white' }}>{moment(date).format('DD/MM')}</Text>
                        <Text style={{ fontSize: 10, color: 'lightgray' }}>{moment(date).format('YYYY')}</Text>
                    </>
                );
                break;

            default:
                keyContent = <Text style={styles.keyText}>{value}</Text>;
                break;
        }

        return keyContent;
    }

    return (
        <>
            <View style={{ backgroundColor: '#242424', width: '100%' }}>
                {matrixValues.map((row: any,) => (
                    <View style={styles.keypadRow} key={row.join('')}>
                        {row.map((value: any, index: number) => (
                            <TouchableOpacity key={index} style={styles.key} onPress={() => handleKeyPress(value)}>
                                <KeyPadHandler value={value} />
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>

            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                    onChange={(event, date) => {
                        if (date) {
                            setDate(date);
                            toggleDatePicker();
                        }
                    }}
                />
            )}
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
