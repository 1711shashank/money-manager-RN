import React from 'react'
import { Text } from 'react-native';
import { View, Modal, StyleSheet } from 'react-native'


const ExpensesAnalysisModal = ({ analysisModal, setAnalysisModal }: any) => {

    const data = [
        ["Need", 30000],
        ["Want", 15000],
        ["Invest", 15000],

    ];



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
                        <View style={styles.modalView}>



                            <Text>Pie Chart</Text>




                        </View>
                    </View>
                </Modal>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    analysisScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },




    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ExpensesAnalysisModal