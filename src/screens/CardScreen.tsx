import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CardContainer from '../components/Card/CardContainer'
import { AntDesign, Ionicons } from '@expo/vector-icons';

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

    const handleAddCard = () => {
        console.log('Add card');
    }

    return (
        <>
            <View style={styles.header}>
                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }}>

                    <Text style={{ color: 'white', fontSize: 20, marginBottom: 5 }}> Cards </Text>

                    <TouchableOpacity onPress={handleAddCard} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 16 }}> Add </Text>
                        <AntDesign name="plus" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={{ width: '100%', height: '100%' }}>

                <View style={{ padding: 0, margin: 0, alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>

                    {cardDetails.map((card, index) => (
                        <CardContainer key={index} card={card} />
                    ))}

                </View>
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        // backgroundColor: '#2c2c2c',
        paddingTop: 30,
    },
});



export default CardScreen