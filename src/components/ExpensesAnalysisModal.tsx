import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import BudgetPieChart from './BudgetPieChart';
import { calculate_BudgetPieChart, calculate_ExpensesPieChart, generateColors } from './../utility/helperFunction';
import ExpensesPieChart from './ExpensesPieChart';

const ExpensesAnalysisModal = ({ analysisModal, setAnalysisModal, selectedMonthData }: any) => {

    const budgetPieChart_Data = calculate_BudgetPieChart(selectedMonthData);
    const budgetPieChart_Series = budgetPieChart_Data.map((item: any) => item.amount);
    const budgetPieChart_Color = generateColors(budgetPieChart_Data.length);;

    const expensesPieChart_Data = calculate_ExpensesPieChart(selectedMonthData);
    const expensesPieChart_Series = expensesPieChart_Data.map((item: any) => item.amount);
    const expensesPieChart_Colors = generateColors(expensesPieChart_Data.length);


    return (
        <>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={analysisModal}
                    onRequestClose={() => { setAnalysisModal(false) }}
                >
                    <View style={styles.analysisScreen}>
                        <BudgetPieChart sliceColor={budgetPieChart_Color} chartData={budgetPieChart_Data} series={budgetPieChart_Series} />
                        <ExpensesPieChart sliceColor={expensesPieChart_Colors} chartData={expensesPieChart_Data} series={expensesPieChart_Series} />
                    </View>
                </Modal>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    analysisScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(26, 26, 30, 0.95)'
    },
});

export default ExpensesAnalysisModal;
