import React from 'react';
import { View, Modal, StyleSheet, ScrollView } from 'react-native';
import BudgetPieChart from './BudgetPieChart';
import ExpensesPieChart from './ExpensesPieChart';
import HalfDonutChart from './HalfDonutChart';

const ExpensesAnalysisModal = ({ analysisModal, setAnalysisModal, selectedMonthData }: any) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={analysisModal}
            onRequestClose={() => { setAnalysisModal(false) }}
        >
            <View style={styles.analysisScreen}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <HalfDonutChart selectedMonthData={selectedMonthData} />
                    <BudgetPieChart selectedMonthData={selectedMonthData} />
                    <ExpensesPieChart selectedMonthData={selectedMonthData} />
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    analysisScreen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(26, 26, 30, 0.95)'
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ExpensesAnalysisModal;
