import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getCategoryData } from '../../utility/helperFunction';


const TransactionRecordsByDate = ({ item }: any) => {

    const categoryData = getCategoryData(item);

    return (
        <>
            <View style={styles.expenseItemRow}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.icons}>
                        {categoryData?.icon}
                    </View>
                    <View style={{ width: '60%' }}>
                        <Text style={{ fontSize: 16, color: 'white' }} numberOfLines={1} ellipsizeMode="tail">
                            {item.message}
                        </Text>
                        <Text style={{ fontSize: 14, color: 'gray' }}>{categoryData?.categoryName}</Text>
                    </View>
                </View>
                {
                    categoryData?.transactionType === 'Income'
                        ? <Text style={{ fontSize: 20, color: '#846EFD' }}>{item.amount}</Text>
                        : <Text style={{ fontSize: 18, color: 'white' }}>{item.amount}</Text>
                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    icons: {
        backgroundColor: '#242424',
        padding: 10,
        borderRadius: 50,
        marginRight: 15,
    },
    expenseItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 7,
    },
});

export default TransactionRecordsByDate;
