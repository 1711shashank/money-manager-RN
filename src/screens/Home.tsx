import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import TransactionFormModal from './TransactionFormModal';
import { AntDesign } from '@expo/vector-icons';
import TransactionScreen from './TransactionScreen';

const Home = () => {
    const [transactionData, setTransactionData] = useState<any[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

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
    }, [modalVisible])


    return (
        <>
            <View style={styles.homeScreen}>

                <TransactionScreen transactionData={transactionData} />

                <Pressable onPress={() => setModalVisible(true)} style={styles.addIconContainer}>
                    <AntDesign name="pluscircle" size={60} color="#846EFD" style={styles.addIcon} />
                </Pressable>
                
            </View>

            <TransactionFormModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </>
    );
};

const styles = StyleSheet.create({

    homeScreen: {
        width: '100%',
        height: '100%',
    },
    addIconContainer: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: 'black',
        borderRadius: 100,
    },
    addIcon: {
        backgroundColor: 'black',
        borderRadius: 100,
    },

});

export default Home;