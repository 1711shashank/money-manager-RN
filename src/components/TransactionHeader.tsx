import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


const TransactionHeader = () => {

    const totalAmount = 50000;
    const formatedTotalAmount = totalAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 });

    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}> August 2023 </Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="lightgray" />
                </View>
            </View>

            <View style={styles.summaryCard}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={[styles.transactionItem, { borderRightWidth: 1, borderColor: 'gray' }]}>
                        <Text style={styles.amountText}> {formatedTotalAmount} </Text>
                        <Text style={styles.amountLabel}> Expenses</Text>
                    </View>
                    <View style={styles.transactionItem}>
                        <Text style={styles.amountText}> {formatedTotalAmount} </Text>
                        <Text style={styles.amountLabel}> Remaining</Text>
                    </View>
                </View>

                <Text style={styles.monthlyBudgetText}> Monthly Budget:{formatedTotalAmount}</Text>
            </View>

        </>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#2c2c2c',
        paddingTop: 30,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    headerText: {
        fontSize: 15,
        color: 'white',
    },
    summaryCard: {
        backgroundColor: '#2c2c2c',
        margin: 10,
        borderRadius: 10,
        paddingVertical: 15,
    },
    transactionItem: {
        flex: 1,
        alignItems: 'center',
    },
    amountText: {
        fontSize: 23,
        color: 'white',
    },
    amountLabel: {
        marginTop: 5,
        fontSize: 12,
        color: 'lightgray',
    },
    monthlyBudgetText: {
        fontSize: 12,
        color: 'lightgray',
        paddingTop: 20,
        textAlign: 'center',
    }
});

export default TransactionHeader;