import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { budgetCategoryArray } from '../../utility/staticData';

const BudgetCategoryRow = ({ budgetCategory, setBudgetCategory }: any) => {

    return (
        <View>

            <View style={styles.budgetCategoryRow}>
                {
                    budgetCategoryArray.map((currItem, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setBudgetCategory(currItem)}
                            style={[styles.budgetCategory, budgetCategory === currItem && styles.budgetCategorySelected]}
                        >
                            <Text style={styles.categoryText}>{currItem}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    );
};



const styles = StyleSheet.create({

    budgetCategoryRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    budgetCategory: {
        width: "28%",
        paddingHorizontal: 25,
        paddingVertical: 7,
        margin: 5,
        fontSize: 15,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#846EFD",
        borderRadius: 20,
        color: "red",
        marginBottom: 20
    },
    budgetCategorySelected: {
        backgroundColor: "#846EFD",
        borderRadius: 20,
    },
    categoryText: {
        textAlign: "center",
        color: "white",
    },

});

export default BudgetCategoryRow;
