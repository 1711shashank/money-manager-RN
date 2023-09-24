import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const CardContainer = ({ card }: any) => {
    return (
        <>
            <View style={styles.card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Text style={{ color: 'white', fontSize: 12, textTransform: 'uppercase', paddingTop: 5 }}> {card.cardName} </Text>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}> {card.bankName} </Text>
                        <Text style={{ color: 'lightgray', fontSize: 10, paddingRight: 2, textTransform: 'uppercase' }}> {card.cardType} </Text>
                    </View>
                </View>

                <View style={{ paddingBottom: 20, paddingLeft: 5 }}>

                    <Text style={{ color: 'white', fontSize: 16 }}>{card.cardNumber}</Text>

                    <View style={{ alignItems: 'flex-end', flexDirection: 'row' }}>
                        <Text style={{ color: 'lightgray', paddingLeft: 15 }}> {card.expiryDate} </Text>
                        <Text style={{ color: 'lightgray', paddingLeft: 30 }}> {card.cvv} </Text>
                    </View>

                    <Text style={{ color: 'white', fontSize: 14, textTransform: 'uppercase' }}> {card.cardHolderName} </Text>
                    <Text style={{ color: 'white', fontSize: 25, position: 'absolute', right: 0, bottom: 0 }}> {card.cardBrand} </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        width: '95%',
        height: 215,
        backgroundColor: '#7B5C98',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        justifyContent: 'space-between'
    }
});

export default CardContainer