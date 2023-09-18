import { StyleSheet, Text, View, TouchableOpacity, Modal, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import KeyPad from '../components/KeyPad';
import KeyPadInputCard from '../components/KeyPadInputCard';
import { postDataToBackend } from '../utility/helperFunction';
import { categoryDataArray, matrixValues } from '../utility/staticData';

const CategoryScreen = ({ categoryModal, setCategoryModal }: any) => {

    const [date, setDate] = useState<Date>(new Date());
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


    const handleNumberPress = (number: any) => {
        (amountString === '0' || amountString === '+' || amountString === '-' || amountString === '*')
            ? setAmountString(number)
            : (amountString.length < 10)
                ? setAmountString(amountString + number)
                : setAmountString(amountString)
    };

    const handleBackPress = () => {
        amountString.length === 1
            ? setAmountString('0')
            : setAmountString(amountString.slice(0, -1))
    };


    const handleSubmit = () => {

        const newData = {
            date: new Date(moment(date).format('YYYY-MM-DD')),
            data: {
                amount: parseInt(amountString),
                message: messageText,
                iconId: selectedCategory,
            }
        };

        postDataToBackend(newData);
        setAmountString('0');
        setKeypadModal(false);
        setCategoryModal(false);

    };

    const handleCategoryPress = (item: any) => {
        setSelectedCategory(item.id);
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
                            onPress={() => handleCategoryPress(item)}
                            style={styles.iconCategory}
                        >
                            <View style={[styles.icons, { backgroundColor: selectedCategory === item.id ? '#846EFD' : '#242424' }]} >
                                {item.icon}
                            </View>
                            <Text style={{ fontSize: 10, color: selectedCategory === item.id ? '#846EFD' : 'lightgray' }} > {item.categoryName} </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {keypadModal &&
                    <>
                        <View style={styles.modal}>
                            <View style={styles.modalContent}>

                                <KeyPadInputCard
                                    amountString={amountString}
                                    setMessageText={setMessageText}
                                    setTextInputFocused={setTextInputFocused}
                                />

                                {!textInputFocused &&
                                    <KeyPad
                                        date={date}
                                        setDate={setDate}
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
        flexWrap: 'wrap',
        flex: 1,
        paddingTop: 70,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        backgroundColor: '#1A1A1A',
    },
    iconCategory: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 15,
    },
    icons: {
        backgroundColor: '#242424',
        padding: 10,
        borderRadius: 50,
        marginBottom: 10,
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

});

export default CategoryScreen;
