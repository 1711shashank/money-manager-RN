import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Modal } from 'react-native';
import { categoryDataArray } from '../utility/IconList';

const CategoryScreen = ({ categoryModal, setCategoryModal }: any) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [formModal, setFormModal] = useState(true);


    const handleCategoryPress = (index: any, iconName: string, categoryName: string) => {
        setSelectedCategory(index);
        setFormModal(true);
    };


    return (
        <View>
            <Modal
                visible={categoryModal}
                onRequestClose={() => setCategoryModal(!categoryModal)}
            >

                <View style={styles.categoryScreen}>
                    {categoryDataArray.map((item: any, index: any) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleCategoryPress(index, item.iconName, item.categoryName)}
                            style={styles.iconCategory}
                        >
                            <View style={[styles.icons, { backgroundColor: selectedCategory === index ? '#846EFD' : '#242424' }]} >
                                {item.icon}
                            </View>
                            <Text style={{ color: selectedCategory === index ? '#846EFD' : 'lightgray' }} > {item.categoryName} </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Modal>
        </View>
    );
};



const styles = StyleSheet.create({
    categoryScreen: {
        width: '100%',
        flexWrap: 'wrap',
        flex: 1,
        paddingTop: 70,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        backgroundColor: '#1A1A1A',
    },
    iconCategory: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 20,
    },
    icons: {
        backgroundColor: '#242424',
        padding: 10,
        borderRadius: 50,
        marginBottom: 10,
    },

});

export default CategoryScreen;
