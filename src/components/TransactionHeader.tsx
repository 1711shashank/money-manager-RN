import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


const TransactionHeader = () => {

    const totalAmount = 50000;
    const formatedTotalAmount = totalAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 });

    return (
        <>
            <View style={{ width: '100%', backgroundColor: '#2c2c2c', paddingTop: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                    <Text style={{ fontSize: 15, color: 'white' }}> August 2023 </Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="lightgray" />
                </View>
            </View>

            <View style={{ backgroundColor: '#2c2c2c', margin: 10, borderRadius: 10, paddingVertical: 15 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: 'gray' }}>
                        <Text style={{ fontSize: 23, color: 'white' }}> {formatedTotalAmount} </Text>
                        <Text style={{ marginTop: 5, fontSize: 12, color: 'lightgray' }}> Expenses</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontSize: 23, color: 'white' }}> {formatedTotalAmount} </Text>
                        <Text style={{ marginTop: 5, fontSize: 12, color: 'lightgray' }}> Remaining</Text>
                    </View>
                </View>

                <Text style={{ fontSize: 12, color: 'lightgray', paddingTop: 20, textAlign: 'center' }}> Monthly Budget: {formatedTotalAmount} </Text>
            </View>

        </>
    )

}
export default TransactionHeader;