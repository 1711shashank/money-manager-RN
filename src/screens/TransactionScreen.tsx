import React from 'react'
import { View } from 'react-native'
import TransactionBody from '../components/TransactionBody'
import { filterDataByMonth } from '../utility/helperFunction'
import TransactionHeader from '../components/TransactionHeader'
import TransactionSummary from '../components/TransactionSummary'

const TransactionScreen = ({ transactionData, uniqueMonthsAndYears, selectedMonth, setSelectedMonth }: any) => {

    const selectedMonthData = filterDataByMonth(transactionData, selectedMonth);

    return (
        <>
            <View style={{ flex: 1, width: '100%' }}>
                <TransactionHeader selectedMonthData={selectedMonthData} uniqueMonthsAndYears={uniqueMonthsAndYears} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                <TransactionSummary selectedMonthData={selectedMonthData} />
                <TransactionBody selectedMonthData={selectedMonthData} />
            </View>
        </>
    )
}

export default TransactionScreen