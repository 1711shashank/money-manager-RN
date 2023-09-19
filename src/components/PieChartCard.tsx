import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';
import PieChart from 'react-native-pie-chart';

const PieChartCard = () => {
    const widthAndHeight = 120;
    const series = [300, 200, 350];
    const sliceColor = ['#6efd84', '#fd846e', '#846efd'];
    const chartData = [
        { title: 'Need', amount: '350' },
        { title: 'Want', amount: '200' },
        { title: 'Invest', amount: '300' },
    ];

    return (
        <>
            <View style={styles.cardView}>

                <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.6}
                    coverFill={'transparent'}
                />

                <View style={styles.chartDataContainer}>
                    {chartData.map((item, index) => (
                        <View key={index} style={styles.chartData}>
                            <View style={{ backgroundColor: sliceColor[index], width: 10, height: 10, borderRadius: 10, marginRight: 8, }} />
                            <Text style={styles.chartDataText}>
                                {item.title}: {item.amount}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({

    cardView: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10,
        backgroundColor: '#2c2c2c',
        borderRadius: 20,
        padding: 35,
    },


    chartDataContainer: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    chartData: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    chartDataText: {
        color: 'white',
        fontSize: 14,
    },
});

export default PieChartCard;
