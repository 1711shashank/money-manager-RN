import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { calculate_ExpensesPieChart, generateColors } from '../../utility/helperFunction';


const ExpensesPieChart = ({ selectedMonthData }: any) => {

    const chartData = calculate_ExpensesPieChart(selectedMonthData);
    const series = chartData.map((item: any) => item.amount);
    const sliceColor = generateColors(chartData.length);
    const widthAndHeight = 200;

    return (
        <>
            <View style={styles.cardView}>

                <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', marginBottom: 15 }}>Expenses Category</Text>

                <View style={styles.pieChart}>

                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0.6}
                        coverFill={'transparent'}
                    />

                    <View style={styles.chartDataContainer}>
                        {chartData.map((item: any, index: any) => (
                            <View key={index} style={styles.chartData}>
                                <View style={{ backgroundColor: sliceColor[index], width: 10, height: 10, borderRadius: 10, marginRight: 8, }} />
                                <Text style={styles.chartDataText}> {item.title}: </Text>
                                <Text style={[styles.chartDataText, { color: 'lightgray' }]}> {item.amount}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>

        </>
    );
};

const styles = StyleSheet.create({

    cardView: {
        width: '95%',
        backgroundColor: '#2c2c2c',
        borderRadius: 15,

        marginVertical: 10,
        paddingVertical: 15,
    },
    pieChart: {
        alignItems: 'center',
        margin: 10,
    },

    chartDataContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 30,
        justifyContent: 'space-between',
    },
    chartData: {
        width: '48%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        paddingLeft: 10,
    },
    chartDataText: {
        color: 'white',
        fontSize: 13,
    },
});

export default ExpensesPieChart;
