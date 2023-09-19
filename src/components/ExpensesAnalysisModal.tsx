import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import PieChartCard from './PieChartCard';
import { calculate_BudgetPieChart } from './../utility/helperFunction';



const ExpensesAnalysisModal = ({ analysisModal, setAnalysisModal, selectedMonthData }: any) => {

    const chartData = calculate_BudgetPieChart(selectedMonthData);
    const series = chartData.map((item: any) => item.amount);

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
                        <PieChartCard series={series} chartData={chartData} />
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
    },
});

export default ExpensesAnalysisModal;
