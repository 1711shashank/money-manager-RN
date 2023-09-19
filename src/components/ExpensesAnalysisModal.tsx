import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import PieChartCard from './PieChartCard';

const ExpensesAnalysisModal = ({ analysisModal, setAnalysisModal }: any) => {

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
                        <PieChartCard />
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
