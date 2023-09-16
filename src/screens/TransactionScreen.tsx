import React from 'react'
import { View } from 'react-native'
import TransactionHeader from '../components/TransactionHeader'
import TransactionBody from '../components/TransactionBody'

const TransactionScreen = ({ transactionData, uniqueMonthsAndYears, selectedMonth, setSelectedMonth }: any) => {
    return (
        <>
            <View style={{ flex: 1 }}>
                <TransactionHeader transactionData={transactionData} uniqueMonthsAndYears={uniqueMonthsAndYears} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                <TransactionBody transactionData={transactionData} selectedMonth={selectedMonth} />
            </View>
        </>
    )
}

export default TransactionScreen