import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, TextInput, Text, Pressable, View, TouchableOpacity } from 'react-native';
import KeyPad from '../components/KeyPad';

const Screen1 = () => {
    const [modalVisible, setModalVisible] = useState(true);

    const [inputValue, setInputValue] = useState('0');
    const [messageText, setMessageText] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [submitIcon, setSubmitIcon] = useState('check'); // Initially set to 'check'

    const matrixValues = [
        ['1', '2', '3', '12/08'],
        ['4', '5', '6', '+'],
        ['7', '8', '9', '-'],
        ['*', '0', 'backspace', 'submit'],
    ];

    const handleNumberPress = (number) => {
        if (inputValue === '0' || inputValue === '+' || inputValue === '-') {
            setInputValue(number);
        } else {
            setInputValue(inputValue + number);
        }
    };

    const handleBackPress = () => {
        if (inputValue.length === 1) {
            setInputValue('0');
        } else {
            setInputValue(inputValue.slice(0, -1));
        }
    };

    const handleSave = () => {
        console.log("Text:", messageText);
        console.log("Input Value:", inputValue);
        setInputValue('0');
        setSubmitIcon('check'); // Set the icon back to 'check'
    };

    const handleCalculate = () => {
        try {
            const result = eval(inputValue);
            setInputValue(result.toString());
            setSubmitIcon('equal'); // Set the icon to 'equal' after calculation
        } catch (error) {
            // Handle any potential errors here
            console.error("Error while evaluating expression:", error);
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <TextInput style={styles.messageInput} placeholder='Message' onChangeText={(text) => setMessageText(text)} />
                            <Text style={styles.inputValue}>{inputValue}</Text>
                        </View>

                        <KeyPad
                            matrixValues={matrixValues}
                            submitIcon={submitIcon}
                            handleSave={handleSave}
                            handleBackPress={handleBackPress}
                            handleCalculate={handleCalculate}
                            handleNumberPress={handleNumberPress}
                        />

                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                    setInputValue('0');
                    setSelectedDate(null);
                    setSubmitIcon('check'); // Set the icon back to 'check'
                    setModalVisible(true);
                }}>
                <Text style={styles.buttonText}>Show Modal</Text>
            </Pressable>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
    },
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
    inputValue: {
        flex: 1,
        color: 'white',
        textAlign: 'right',
        marginRight: 5,
        fontSize: 20,
    },

    button: {
        borderRadius: 20,
        padding: 10,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Screen1;
