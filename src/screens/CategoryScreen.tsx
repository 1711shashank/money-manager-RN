import { StyleSheet, View, Modal, Keyboard, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import KeyPad from '../components/TransactionForm/KeyPad';
import KeyPadInputCard from '../components/TransactionForm/KeyPadInputCard';
import { postDataToBackend } from '../utility/helperFunction';
import { matrixValues } from '../utility/staticData';
import BudgetCategoryRow from '../components/TransactionForm/BudgetCategoryRow';
import CategoryIcons from '../components/TransactionForm/CategoryIcons';
import { Text } from 'react-native';

const CategoryScreen = ({ categoryModal, setCategoryModal }: any) => {

    const [date, setDate] = useState<Date>(new Date());
    const [messageText, setMessageText] = useState('');
    const [amountString, setAmountString] = useState('0');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [budgetCategory, setBudgetCategory] = useState<string>("Need");

    const [activeTab, setActiveTab] = useState('Expenses');
    const [keypadModal, setKeypadModal] = useState(false);
    const [textInputFocused, setTextInputFocused] = useState(false);

    useEffect(() => {
        setSelectedCategory(null);
        setActiveTab('Expenses'); 
    }, [categoryModal, keypadModal])

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

        if (selectedCategory === null) {
            Alert.alert("Please select a category");
            return;
        }

        const newData = {
            date: new Date(moment(date).format('YYYY-MM-DD')),
            data: {
                amount: parseInt(amountString),
                message: messageText,
                iconId: selectedCategory,
                budgetCategory: selectedCategory && selectedCategory < 100 ? budgetCategory : null
            }
        };

        postDataToBackend(newData);
        setAmountString('0');
        setMessageText('');
        setKeypadModal(false);
        setCategoryModal(false);
        setDate(new Date());

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

                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={[styles.tab, activeTab === 'Expenses' && styles.activeTab]}
                            onPress={() => setActiveTab('Expenses')}
                        >
                            <Text style={[styles.tabText, activeTab === 'Expenses' && styles.activeTabText]}>
                                Expenses
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tab, activeTab === 'Income' && styles.activeTab]}
                            onPress={() => setActiveTab('Income')}
                        >
                            <Text style={[styles.tabText, activeTab === 'Income' && styles.activeTabText]}>
                                Income
                            </Text>
                        </TouchableOpacity>

                    </View>

                    {
                        activeTab === 'Expenses' &&
                        <BudgetCategoryRow budgetCategory={budgetCategory} setBudgetCategory={setBudgetCategory} />
                    }
                    <CategoryIcons transactionType={activeTab} selectedCategory={selectedCategory} handleCategoryPress={handleCategoryPress} />

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
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        backgroundColor: '#1A1A1A',
        // backgroundColor: '#2c2c2c',
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

    tab: {
        flex: 1,
        borderBottomColor: '#846EFD',
        borderBottomWidth: 0,
        marginBottom: 20,
        backgroundColor: '#2c2c2c',
        paddingTop: 20
    },
    activeTab: {
        borderBottomWidth: 2,
    },
    tabText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginBottom: 8
    },
    activeTabText: {
        color: '#846EFD',
    },
});

export default CategoryScreen;
