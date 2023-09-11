import React from 'react';
import { View, StyleSheet } from 'react-native';
import { expensesDataArray } from '../utility/dummyData';
import ExpensesByDate from './ExpensesByDate';
import moment from 'moment';
import MonthlyTotal from './MonthlyTotal';

const Home = () => {
    return (
        <View style={styles.homeScreen}>
            <MonthlyTotal />
            {
                expensesDataArray.map((expensesData, index) => (
                    <ExpensesByDate
                        key={index}
                        date={moment(expensesData.date).format('YYYY-MM-DD')}
                        data={expensesData.data}
                    />
                ))
            }
        </View>
    )
};

const styles = StyleSheet.create({
    homeScreen: {
        width: '100%',
    },
});

export default Home;
