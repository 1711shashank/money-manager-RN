import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const ExpenseItem = ({ item }: { item: { message: string; amount: number, expensesCategory: string } }) => {
    return (
        <View style={styles.expenseItemRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.icons}>
                    <Ionicons name="fast-food-outline" size={24} color="lightgray" />
                </View>
                <View style={{ width: '60%' }}>
                    <Text style={{ fontSize: 16, color: 'white' }} numberOfLines={1} ellipsizeMode="tail" >{item.message}</Text>
                    <Text style={{ fontSize: 14, color: 'gray' }} >{item.expensesCategory}</Text>
                </View>
            </View>
            <Text style={{ fontSize: 18, color: 'white' }}>{item.amount}</Text>
        </View>
    );
};

const TransactionRocordsByDate = ({ date, data }: { date: string; data: { message: string; amount: number, expensesCategory: string }[] }) => {
    return (
        <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ color: 'white', paddingLeft: 10, paddingTop: 30, paddingBottom: 8 }}>{moment(date).format('DD MMM YYYY')}</Text>
            {data.map((item, index) => (
                <ExpenseItem key={index} item={item} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({

    icons: {
        backgroundColor: '#242424',
        padding: 10,
        borderRadius: 50,
        marginRight: 15

    },
    expenseItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 7,
    },

});

export default TransactionRocordsByDate;
