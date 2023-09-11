import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import moment from 'moment';

const ExpenseItem = ({ item }: { item: { message: string; amount: number } }) => {
    return (
        <View style={styles.expenseItemRow}>
            <Text style={styles.message} numberOfLines={1} ellipsizeMode="tail" >{item.message}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
        </View>
    );
};

const ExpensesByDate = ({ date, data }: { date: string; data: { message: string; amount: number }[] }) => {
    return (
        <View style={styles.expensesByDateCard}>
            <Text style={styles.date}>{moment(date).format('DD MMM YYYY')}</Text>
            {data.map((item, index) => (
                <ExpenseItem key={index} item={item} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    expensesByDateCard: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        margin: 5,
    },
    date: {
        fontSize: 10,
        color: 'white',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    expenseItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    amount: {
        color: 'white',
        width: '20%',
        textAlign: 'right',
    },
    message: {
        color: 'white',
        width: '70%',
    },
});

export default ExpensesByDate;
