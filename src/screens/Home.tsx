import React from 'react';
import { ScrollView, View } from 'react-native';
import TransactionHeader from '../components/TransactionHeader';
import TransactionBody from '../components/TransactionBody';

const Home = () => {


    return (
        <>
            <View >
                <TransactionHeader />
                <TransactionBody />
            </View>
        </>
    )
};

export default Home;
