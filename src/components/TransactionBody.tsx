import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity } from 'react-native';
import moment from 'moment';
import TransactionRocordsByDate from './TransactionRocordsByDate'


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


const TransactionBody = ({ transactionData }: any) => {


    console.log(transactionData.Data)

    const data: SectionDataProps[] = transactionData.map((item: TransactionDataProps) => ({
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
