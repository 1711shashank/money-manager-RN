import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity } from 'react-native';
import moment from 'moment';
import TransactionRocordsByDate from './TransactionRocordsByDate'
import { filterDataByMonth, toString_MonthsAndYear } from '../utility/helperFunction';


type TransactionItemProps = {
    amount: number;
    message: string;
    expensesCategory: string;
    transactionType: string;
};

type TransactionDataProps = {
    date: Date;
    data: TransactionItemProps[];
};

type SectionDataProps = {
    title: string;
    data: TransactionItemProps[];
};


const TransactionBody = ({ transactionData, selectedMonth }: any) => {

    const selectedMonthData = filterDataByMonth(transactionData, selectedMonth);

    const data: SectionDataProps[] = selectedMonthData.map((item: TransactionDataProps) => ({
        title: moment(item.date).format('DD MMM YYYY'),
        data: item.data,
    }));

    return (
        <>
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={data}
                    scrollEnabled={true}
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
        marginHorizontal: 15
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
