import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { calculateTotalExpenses, formatAmount } from '../utility/helperFunction';
import { useEffect } from 'react';
import { Picker } from "@react-native-picker/picker";


const TransactionHeader = ({ transactionData, uniqueMonthsAndYears }: any) => {

    const [selectedMonthYear, setSelectedMonthYear] = useState(uniqueMonthsAndYears[0]);


    const { totalIncome, totalExpenses } = calculateTotalExpenses(transactionData);

    const formatedTotalIncome = formatAmount(totalIncome);
    const formatedTotalExpenses = formatAmount(totalExpenses);
    const formatedRemaining = formatAmount(totalIncome - totalExpenses);

    return (
        <>
            {/* <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}> {uniqueMonthsAndYears[0]} </Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="lightgray" />
                </View>
            </View> */}

            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Picker
                        selectedValue={selectedMonthYear}
                        onValueChange={(itemValue, index) => setSelectedMonthYear(itemValue)}
                        style={styles.picker}
                        dropdownIconColor='#2c2c2c'
                        dropdownIconRippleColor='#2c2c2c'
                        numberOfLines={5}
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
