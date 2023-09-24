import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import ExpensesAnalysisModal from '../Chart/ExpensesAnalysisModal';


const TransactionHeader = ({ selectedMonthData, uniqueMonthsAndYears, selectedMonth, setSelectedMonth, navigation }: any) => {

    const [analysisModal, setAnalysisModal] = useState(false);

    return (
        <>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.headerContentLeft}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <MaterialIcons name="menu" size={24} color="white" style={{ marginLeft: 20 }} />
                        </TouchableOpacity>
                        <Picker
                            selectedValue={selectedMonth}
                            onValueChange={(itemValue) => setSelectedMonth(itemValue)}
                            style={styles.picker}
                            dropdownIconColor='#2c2c2c'
                            dropdownIconRippleColor='#2c2c2c'
                        >
                            {uniqueMonthsAndYears.map((monthYear: any, index: number) => (
                                <Picker.Item key={index} label={monthYear} value={monthYear} />
                            ))}
                        </Picker>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
                    </View>
                    <TouchableOpacity onPress={() => setAnalysisModal(true)} style={{ flex: 1 }}>
                        <MaterialIcons name="show-chart" size={24} color="white" style={{ textAlign: 'right', paddingRight: 20 }} />
                    </TouchableOpacity>
                </View>

                <ExpensesAnalysisModal analysisModal={analysisModal} setAnalysisModal={setAnalysisModal} selectedMonthData={selectedMonthData} />

            </View>

        </>
    );
};

const styles = StyleSheet.create({

    header: {
        backgroundColor: '#2c2c2c',
        paddingTop: 30,
    },
    headerContentLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    picker: {
        width: '100%',
        color: 'white',
        marginRight: '-50%',
    },
});

export default TransactionHeader;
