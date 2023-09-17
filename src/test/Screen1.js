import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, TextInput, Text, Pressable, View, TouchableOpacity } from 'react-native';
import KeyPad from './KeyPad';
import ModalHeader from './ModalHeader';

const Screen1 = () => {
    const [modalVisible, setModalVisible] = useState(true);

    const [amount, setAmount] = useState('0');
    const [messageText, setMessageText] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [submitIcon, setSubmitIcon] = useState('check'); 

    const matrixValues = [
        ['1', '2', '3', '12/08'],
        ['4', '5', '6', '+'],
        ['7', '8', '9', '-'],
        ['*', '0', 'backspace', 'submit'],
    ];

    const handleNumberPress = (number) => {
        if (amount === '0' || amount === '+' || amount === '-') {
            setAmount(number);
        } else {
            setAmount(amount + number);
        }
    };

    const handleBackPress = () => {
        amount.length === 1
            ? setAmount('0')
            : setAmount(amount.slice(0, -1))
    };

    const handleSubmit = () => {
        console.log("Text:", messageText);
        console.log("Input Value:", amount);
        setAmount('0');
        setSubmitIcon('check'); 
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

                        <ModalHeader amount={amount} setMessageText={setMessageText} />

                        <KeyPad
                            matrixValues={matrixValues}
                            amount={amount}
                            setAmount={setAmount}
                            handleSubmit={handleSubmit}
                            handleBackPress={handleBackPress}
                            handleNumberPress={handleNumberPress}
                        />

                    </View>
                </View>
            </Modal>


            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                    setAmount('0');
                    setSelectedDate(null);
                    setSubmitIcon('check');
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
