import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { calculateTotalExpenses, formatAmount } from '../utility/helperFunction';
import { useEffect } from 'react';


const TransactionHeader = ({ transactionData }: any) => {

    const { totalIncome, totalExpenses } = calculateTotalExpenses(transactionData);

    const formatedTotalIncome = formatAmount(totalIncome);
    const formatedTotalExpenses = formatAmount(totalExpenses);
    const formatedRemaining = formatAmount(totalIncome - totalExpenses);

    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}> August 2023 </Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="lightgray" />
                </View>
            </View>

            <View style={styles.summaryCard}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={[styles.transactionItem, { borderRightWidth: 1, borderColor: 'gray' }]}>
                        <Text style={styles.amountText}> {formatedTotalExpenses} </Text>
                        <Text style={styles.amountLabel}> Expenses</Text>
                    </View>
                    <View style={styles.transactionItem}>
                        <Text style={styles.amountText}> {formatedRemaining} </Text>
                        <Text style={styles.amountLabel}> Remaining</Text>
                    </View>
                </View>

                <Text style={styles.monthlyBudgetText}> Monthly Budget:{formatedTotalIncome}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2c2c2c',
        paddingHorizontal: 15,
        paddingTop: 30,
        // marginTop: StatusBar.currentHeight || 0

    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    headerText: {
        fontSize: 15,
        color: 'white',
    },
    summaryCard: {
        backgroundColor: '#2c2c2c',
        margin: 10,
        borderRadius: 10,
        paddingVertical: 15,
        marginHorizontal: 20
    },
    transactionItem: {
        flex: 1,
        alignItems: 'center',
    },
    amountText: {
        fontSize: 23,
        color: 'white',
    },
    amountLabel: {
        marginTop: 5,
        fontSize: 12,
        color: 'lightgray',
    },
    monthlyBudgetText: {
        fontSize: 12,
        color: 'lightgray',
        paddingTop: 20,
        textAlign: 'center',
    },
});

export default TransactionHeader;
