import React from 'react'
import { View } from 'react-native'
import TransactionHeader from '../components/TransactionHeader'
import TransactionBody from '../components/TransactionBody'

const TransactionScreen = ({ transactionData }: any) => {
    return (
        <>
            <View style={{flex:1}}>
                <TransactionHeader transactionData={transactionData}/>
                <TransactionBody transactionData={transactionData} />
            </View>
        </>
    )
}

export default TransactionScreen