import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native';

const FormModal = ({ formModal, setFormModal }: any) => {
    return (
        <View>
            <Modal
                visible={formModal}
                transparent={true}
                onRequestClose={() => setFormModal(false)}>

                <View>
                    <View style={styles.formScreen}>
                        <View style={styles.modalView}>
                            <Text >NAme</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    formScreen: {
        alignItems:'center'
    },
    modalView: {
        width: '100%',
        backgroundColor: 'pink',
        padding: 25,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default FormModal