import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import moment from 'moment';

type TransactionItemProps = {
    amount: number;
    message: string;
    expensesCategory: string;
    transactionCategory: string;
};

type TransactionRecordsByDateProps = {
    date: string;
    data: TransactionItemProps[];
};

const ExpenseItem = ({ item }: { item: TransactionItemProps }) => {
    return (
        <View style={styles.expenseItemRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.icons}>
                    <Ionicons name="fast-food-outline" size={24} color="lightgray" />
                </View>
                <View style={{ width: '60%' }}>
                    <Text style={{ fontSize: 16, color: 'white' }} numberOfLines={1} ellipsizeMode="tail">
                        {item.message}
                    </Text>
                    <Text style={{ fontSize: 14, color: 'gray' }}>{item.expensesCategory}</Text>
                </View>
            </View>
            <Text style={{ fontSize: 18, color: 'white' }}>{item.amount}</Text>
        </View>
    );
};

const TransactionRecordsByDate = ({ date, data }: TransactionRecordsByDateProps) => {
    return (
        <SectionList
            sections={[{ title: moment(date).format('DD MMM YYYY'), data }]}
            keyExtractor={(item, index) => index.toString()}
            renderSectionHeader={({ section }) => (
                <Text style={{ color: 'white', paddingLeft: 10, paddingTop: 30, paddingBottom: 8 }}>
                    {section.title}
                </Text>
            )}
            renderItem={({ item }) => <ExpenseItem item={item} />}
        />
    );
};

const styles = StyleSheet.create({
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

export default TransactionRecordsByDate;
