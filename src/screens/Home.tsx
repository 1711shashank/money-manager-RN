import React from 'react';
import { View } from 'react-native';
import TransactionHeader from '../components/TransactionHeader';
import TransactionBody from '../components/TransactionBody';

const Home = () => {
    return (
        <View style={{ width: '100%' }}>
            <TransactionHeader />
            <TransactionBody />
        </View>
    )
};

export default Home;
