import React from 'react';
import { View, StyleSheet } from 'react-native';
import { expensesDataArray } from '../utility/dummyData';
import ExpensesByDate from './ExpensesByDate';
import moment from 'moment';

const Home: React.FC = () => (
    <View style={styles.homeScreen}>
        {expensesDataArray.map((expensesData, index) => (
            <ExpensesByDate
                key={index}
                date={moment(expensesData.date).format('YYYY-MM-DD')} // Format the date as a string
                data={expensesData.data}
            />
        ))}
    </View>
);

const styles = StyleSheet.create({
    homeScreen: {
        width: '100%',
        padding: 10,
        marginTop:30,
    },
});

export default Home;
