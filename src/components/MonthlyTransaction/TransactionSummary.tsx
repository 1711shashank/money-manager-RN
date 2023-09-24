import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { calculateTotalExpenses, formatAmount } from '../../utility/helperFunction';


const TransactionSummary = ({ selectedMonthData }: any) => {

    const { totalIncome, totalExpenses } = calculateTotalExpenses(selectedMonthData);

    const formatedTotalIncome = formatAmount(totalIncome);
    const formatedTotalExpenses = formatAmount(totalExpenses);
    const formatedRemaining = formatAmount(totalIncome - totalExpenses);

    return (
        <>
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

export default TransactionSummary;
