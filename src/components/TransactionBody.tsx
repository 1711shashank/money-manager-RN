import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from 'react-native';
import moment from 'moment';
import TransactionRocordsByDate from './TransactionRocordsByDate'
import { expensesDataArray } from '../utility/dummyData';

type TransactionItemProps = {
    amount: number;
    message: string;
    expensesCategory: string;
    transactionCategory: string;
};

type ExpensesDataProps = {
    date: Date;
    data: TransactionItemProps[];
};

type SectionDataProps = {
    title: string; // Change this to accept a Date or string
    data: TransactionItemProps[];
};


const TransactionBody: React.FC = () => {
    const data: SectionDataProps[] = expensesDataArray.map((expensesData: ExpensesDataProps) => ({
        title: moment(expensesData.date).format('DD MMM YYYY'), // Convert date to string
        data: expensesData.data,
    }));

    return (
        <>
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={data}
                    keyExtractor={(item, index) => item.message + index.toString()}
                    renderItem={({ item }) => <TransactionRocordsByDate item={item} />}
                    renderSectionHeader={({ section }) => (
                        <Text style={{ color: 'white', paddingLeft: 10, paddingTop: 30, paddingBottom: 8 }}>
                            {section.title}
                        </Text>
                    )}
                />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:15
    },
    icons: {
        backgroundColor: '#242424',
        padding: 10,
        borderRadius: 50,
        marginRight: 15,
    },
    expenseItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 7,
    },
});

export default TransactionBody;
