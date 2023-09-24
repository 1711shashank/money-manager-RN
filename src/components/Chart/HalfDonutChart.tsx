import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet, Dimensions } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { calculateTotalExpenses, formatAmount } from '../../utility/helperFunction';


const HalfDonutChart = ({ selectedMonthData }: any) => {

    const { totalIncome, totalExpenses } = calculateTotalExpenses(selectedMonthData);

    const sliceColor = ['#E87D7D', 'gray', 'transparent'];
    const series = [totalIncome - totalExpenses, totalExpenses, totalIncome];
    const percentage = Math.floor(((totalIncome - totalExpenses) / totalIncome) * 100);

    const screenWidth = Dimensions.get('window').width;
    const widthAndHeight = 0.65 * screenWidth;

    // const series = [500, 500, 1000];
    // const percentage = 1;

    return (
        <>
            <View style={styles.cardView}>

                <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', marginBottom: 15 }}> Account Details </Text>

                <View style={styles.pieChart}>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0.9}
                        coverFill={'transparent'}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={{ color: 'lightgray', fontSize: 14 }}> {formatAmount(totalIncome - totalExpenses)} </Text>
                    <Text style={{ color: 'white', fontSize: 35, marginLeft: 20, bottom: '12%' }}>{percentage}% </Text>
                    <Text style={{ color: 'lightgray', fontSize: 14 }}> {formatAmount(totalIncome)} </Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    cardView: {
        width: '95%',
        height: '24%',
        backgroundColor: '#2c2c2c',
        borderRadius: 15,
        marginVertical: 10,
        paddingHorizontal: 35,
        paddingVertical: 25,
        position: 'relative',
    },
    pieChart: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        transform: [{ rotate: '-90deg' }],
    },
    textContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: '90%',
        left: 0,
        right: 0, bottom: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0.07 * Dimensions.get('window').width,
    },
});

export default HalfDonutChart;
