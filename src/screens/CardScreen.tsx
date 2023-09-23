import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CardContainer from '../components/CardContainer'

const CardScreen = () => {

    const cardDetails = [
        {
            bankName: 'SBI Card',
            cardName: 'Cashback Card',
            cardType: 'Credit Card',
            cardNumber: '1234 1234 1234 1234',
            expiryDate: '10/30',
            cvv: '123',
            cardHolderName: 'Kumar Shashank',
            cardBrand: 'Visa',
        },
        {
            bankName: 'ICICI Card',
            cardName: 'Coral Rupay',
            cardType: 'Credit Card',
            cardNumber: '1234 1234 1234 1234',
            expiryDate: '10/30',
            cvv: '123',
            cardHolderName: 'Kumar Shashank',
            cardBrand: 'Rupay',
        },
        {
            bankName: 'IDFC Card',
            cardName: 'Millennia',
            cardType: 'Credit Card',
            cardNumber: '1234 1234 1234 1234',
            expiryDate: '10/30',
            cvv: '123',
            cardHolderName: 'Kumar Shashank',
            cardBrand: 'Visa',
        },

    ];

    return (
        <>
            <ScrollView style={{ width: '100%', height: '100%' }}>
                <View style={{ padding: 0, margin: 0, alignItems: 'center', paddingTop: 100, paddingBottom: 10 }}>

                    {cardDetails.map((card, index) => (
                        <CardContainer key={index} card={card} />
                    ))}

                </View>
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
});



export default CardScreen