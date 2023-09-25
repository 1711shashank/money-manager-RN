import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import TransactionScreen from './screens/TransactionScreen';
import { StyleSheet, Pressable, View } from 'react-native';
import { extractMonthsAndYears, toString_MonthsAndYear } from './utility/helperFunction';
import CategoryScreen from './screens/CategoryScreen';

const Home = ({ user, signOut }: any) => {
    const [transactionData, setTransactionData] = useState<any[]>([]);
    const [categoryModal, setCategoryModal] = useState(false);


    const uniqueMonthsAndYears = extractMonthsAndYears(transactionData);
    const [selectedMonth, setSelectedMonth] = useState(toString_MonthsAndYear(new Date()));


    const fetchData = async () => {
        try {
            const response = await fetch('https://moneymanagerserver.onrender.com/getData');
            const responseData = await response.json();
            setTransactionData(responseData.data);

            // console.log("responseJson", responseData.data);

        } catch (error) {
            // console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [categoryModal, selectedMonth])


    return (
        <>
            <View style={styles.homeScreen}>

                <TransactionScreen transactionData={transactionData} uniqueMonthsAndYears={uniqueMonthsAndYears} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} user={user} signOut={signOut} />

                <Pressable onPress={() => setCategoryModal(true)} style={styles.addIconContainer}>
                    <AntDesign name="pluscircle" size={60} color="#846EFD" style={styles.addIcon} />
                </Pressable>

            </View>

            <CategoryScreen categoryModal={categoryModal} setCategoryModal={setCategoryModal} />

        </>
    );
};

const styles = StyleSheet.create({

    homeScreen: {
        width: '100%',
        height: '100%',
        backgroundColor: "#1A1A1A",
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