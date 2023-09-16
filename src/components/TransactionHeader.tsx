import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View } from 'react-native';
import { calculateTotalExpenses, formatAmount } from '../utility/helperFunction';


const TransactionHeader = ({ transactionData, uniqueMonthsAndYears, selectedMonth, setSelectedMonth }: any) => {

    const { totalIncome, totalExpenses } = calculateTotalExpenses(transactionData);

    const formatedTotalIncome = formatAmount(totalIncome);
    const formatedTotalExpenses = formatAmount(totalExpenses);
    const formatedRemaining = formatAmount(totalIncome - totalExpenses);

    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Picker
                        selectedValue={selectedMonth}
                        onValueChange={(itemValue) => setSelectedMonth(itemValue)}
                        style={styles.picker}
                        dropdownIconColor='#2c2c2c'
                        dropdownIconRippleColor='#2c2c2c'
                    >
                        {uniqueMonthsAndYears.map((monthYear: any, index: number) => (
                            <Picker.Item key={index} label={monthYear} value={monthYear} />
                        ))}
                    </Picker>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="white" style={{ marginLeft: -65 }} />

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
        paddingTop: 30,
        // marginTop: StatusBar.currentHeight || 0

    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    picker: {
        width: '40%',
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
