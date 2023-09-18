import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Modal, Keyboard } from 'react-native';
import { categoryDataArray } from '../utility/IconList';
import KeyPad from '../test/KeyPad';
import ModalHeader from '../test/ModalHeader';

const CategoryScreen = ({ categoryModal, setCategoryModal }: any) => {

    const [messageText, setMessageText] = useState('');
    const [amountString, setAmountString] = useState('0');
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [keypadModal, setKeypadModal] = useState(false);
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
        ['1', '2', '3', 'date'],
        ['4', '5', '6', '+'],
        ['7', '8', '9', '-'],
        ['*', '0', 'backspace', 'submit'],
    ];

    const handleNumberPress = (number: any) => {
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
        setKeypadModal(false);
    };

    const handleCategoryPress = (index: any) => {
        setSelectedCategory(index);
        setAmountString('0');
        setKeypadModal(true);
    };

    return (
        <View>
            <Modal
                visible={categoryModal}
                onRequestClose={() => setCategoryModal(!categoryModal)}
            >
                <View style={styles.categoryScreen}>
                    {categoryDataArray.map((item: any, index: any) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleCategoryPress(index)}
                            style={styles.iconCategory}
                        >
                            <View style={[styles.icons, { backgroundColor: selectedCategory === index ? '#846EFD' : '#242424' }]} >
                                {item.icon}
                            </View>
                            <Text style={{ color: selectedCategory === index ? '#846EFD' : 'lightgray' }} > {item.categoryName} </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {keypadModal &&
                    <>
                        <View style={styles.modal}>
                            <View style={styles.modalContent}>

                                <ModalHeader
                                    amountString={amountString}
                                    setMessageText={setMessageText}
                                    setTextInputFocused={setTextInputFocused}
                                />

                                {!textInputFocused &&
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
                    </>
                }
            </Modal>




        </View>
    );
};



const styles = StyleSheet.create({
    categoryScreen: {
        width: '100%',
        flexWrap: 'wrap',
        flex: 1,
        paddingTop: 70,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        backgroundColor: '#1A1A1A',
    },
    iconCategory: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 20,
    },
    icons: {
        backgroundColor: '#242424',
        padding: 10,
        borderRadius: 50,
        marginBottom: 10,
    },



    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },
    modal: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 0,
        width: '100%'
    },
    modalContent: {
        alignItems: 'center',
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

export default CategoryScreen;
