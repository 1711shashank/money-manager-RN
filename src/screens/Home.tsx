import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import NewTransactionForm from './NewTransactionForm';
import TransactionScreen from './TransactionScreen';

const Home: React.FC = () => {
    
    const [transactionData, setTransactionData] = useState<any[]>([]);
    const [showTransactionForm, setShowTransactionForm] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch('https://moneymanagerserver.onrender.com/getData');
            const responseData = await response.json();
            setTransactionData(responseData.data);

            console.log("responseJson", responseData.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])


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
