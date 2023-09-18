import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, Keyboard, } from 'react-native';
import KeyPad from './KeyPad';
import ModalHeader from './ModalHeader';

const Screen1 = () => {
    const [modalVisible, setModalVisible] = useState(true);

    const [amountString, setAmountString] = useState('0');
    const [messageText, setMessageText] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [textInputFocused, setTextInputFocused] = useState(false);


    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setTextInputFocused(true));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setTextInputFocused(false));

        // React Lifecycle => Cleanup the event listeners when the component unmounts 
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };

    }, [textInputFocused]);


    const matrixValues = [
        ['1', '2', '3', '12/08'],
        ['4', '5', '6', '+'],
        ['7', '8', '9', '-'],
        ['*', '0', 'backspace', 'submit'],
    ];

    const handleNumberPress = (number) => {
        (amountString === '0' || amountString === '+' || amountString === '-' || amountString === '*')
            ? setAmountString(number)
            : (amountString.length < 12)
                ? setAmountString(amountString + number)
                : setAmountString(amountString)
    };

    const handleBackPress = () => {
        amountString.length === 1
            ? setAmountString('0')
            : setAmountString(amountString.slice(0, -1))
    };

    const handleSubmit = () => {
        console.log("Text:", messageText);
        console.log("Input Value:", amountString);
        setAmountString('0');
        setModalVisible(false);
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
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>

                        <ModalHeader amountString={amountString} setMessageText={setMessageText} setTextInputFocused={setTextInputFocused} />
                        {
                            !textInputFocused &&
                            <KeyPad
                                messageText={messageText}
                                matrixValues={matrixValues}
                                amountString={amountString}
                                setAmountString={setAmountString}
                                handleSubmit={handleSubmit}
                                handleBackPress={handleBackPress}
                                handleNumberPress={handleNumberPress}
                            />
                        }
                    </View>
                </View>
            </Modal>


            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                    setAmountString('0');
                    setSelectedDate(null);
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
        height: '100%',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
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
