import React from 'react'
import { View } from 'react-native'
import TransactionBody from '../components/TransactionBody'
import { filterDataByMonth } from '../utility/helperFunction'
import TransactionHeader from '../components/TransactionHeader'

const TransactionScreen = ({ transactionData, uniqueMonthsAndYears, selectedMonth, setSelectedMonth }: any) => {

    const selectedMonthData = filterDataByMonth(transactionData, selectedMonth);

    return (
        <>
            <View style={{ flex: 1 }}>
                <TransactionHeader transactionData={transactionData} uniqueMonthsAndYears={uniqueMonthsAndYears} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                <TransactionBody selectedMonthData={selectedMonthData} />
            </View>
        </>
    )
}

export default TransactionScreen