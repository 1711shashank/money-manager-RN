import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { categoryDataArray } from '../../utility/staticData';

const CategoryIcons = ({ transactionType, selectedCategory, handleCategoryPress }: any) => {

    return (
        <>
            {
                categoryDataArray.map((item, index) => {
                    if (transactionType === item.transactionType) {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleCategoryPress(item)}
                                style={styles.iconCategory}
                            >
                                <View style={[styles.icons, { backgroundColor: selectedCategory === item.id ? '#846EFD' : '#242424' }]} >
                                    {item.icon}
                                </View>
                                <Text style={{ fontSize: 10, color: selectedCategory === item.id ? '#846EFD' : 'lightgray' }} > {item.categoryName} </Text>
                            </TouchableOpacity>
                        );
                    } else {
                        return null;
                    }
                })
            }
        </>
    );
};



const styles = StyleSheet.create({
    categoryScreen: {
        flexWrap: 'wrap',
        flex: 1,
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        backgroundColor: '#1A1A1A',
    },
    iconCategory: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 15,
    },
    icons: {
        backgroundColor: '#242424',
        padding: 10,
        borderRadius: 50,
        marginBottom: 10,
    },

});

export default CategoryIcons;
