import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { expensesDataArray } from '../utility/dummyData';
import { AntDesign } from '@expo/vector-icons';
import NewTransactionForm from './NewTransactionForm';
import TransactionScreen from './TransactionScreen';

const Home: React.FC = () => {
    const [transactionData, setTransactionData] = useState(expensesDataArray);
    const [showTransactionForm, setShowTransactionForm] = useState(true);


    const handleClick = () => {
        console.log(showTransactionForm);
        setShowTransactionForm(true);
    }

    return (
        <View>
            {showTransactionForm ? (
                <NewTransactionForm
                    transactionData={transactionData}
                    setTransactionData={setTransactionData}
                    setShowTransactionForm={setShowTransactionForm}
                />
            ) : (
                <>
                    <TransactionScreen transactionData={transactionData} />
                    <View>
                        <TouchableOpacity onPress={() => handleClick()}>
                            <AntDesign name="pluscircle" size={55} color="#846EFD" style={styles.addIcon} />
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    addIcon: {
        position: 'absolute',
        bottom: 30,
        right: 40,
        backgroundColor: 'black',
        borderRadius: 100,
    },
});

export default Home;
