import React, { useState } from "react";
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Platform } from "react-native";

const expensesCategoryArray: string[] = ["Need", "Want", "Invest"];
const transactionCategoryArray: string[] = ["Expenses", "Income"];


const AddExpenseForm = () => {
	const [amount, setAmount] = useState<number>(0);
	const [message, setMessage] = useState<string>('');
	const [date, setDate] = useState<Date>(new Date());
	const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
	const [expensesCategory, setExpensesCategory] = useState<string>("Need");
	const [transactionCategory, setTransactionCategory] = useState<string>("Expenses");
	const [isDisabled, setIsDisabled] = useState<boolean>(true);


	const handleAmountChange = (num: string) => {
		const parsedAmount = parseInt(num);
		setAmount(parsedAmount);
		setIsDisabled(!parsedAmount || parsedAmount === 0);
	};

	const toggleDatePicker = () => {
		setShowDatePicker(!showDatePicker);
	};

	const handleSubmit = () => {
		if (transactionCategory === "Expenses")
			console.log(transactionCategory, amount, message, moment(date).format('DD MMM YYYY'), expensesCategory);
		else
			console.log(transactionCategory, amount, message, moment(date).format('DD MMM YYYY'));

	}

	return (
		<>
			<View style={styles.container}>

				<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
					{transactionCategoryArray.map((currItem, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => setTransactionCategory(currItem)}
							style={[styles.transactionCategorys, transactionCategory === currItem && styles.transactionCategorySelected]}
						>
							<Text style={styles.categoryText}>{currItem}</Text>
						</TouchableOpacity>
					))}
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.label}>Amount</Text>
					<TextInput
						style={styles.input}
						keyboardType="numeric"
						onChangeText={handleAmountChange}
					/>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.label}>Message</Text>
					<TextInput
						style={styles.input}
						onChangeText={(text) => setMessage(text)}
					/>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.label}>Date</Text>
					<TextInput
						style={styles.input}
						value={moment(date).format('DD MMM YYYY')}
						onTouchStart={toggleDatePicker}
						showSoftInputOnFocus={false}
					/>
					{showDatePicker && (
						<DateTimePicker
							value={date}
							mode="date"
							display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
							onChange={(event, date) => {
								if (date) {
									setDate(date);
									toggleDatePicker();
								}
							}}
						/>
					)}
				</View>

				{
					transactionCategory === "Expenses"
					&&
					<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
						{expensesCategoryArray.map((currItem, index) => (
							<TouchableOpacity
								key={index}
								onPress={() => setExpensesCategory(currItem)}
								style={[styles.expensesCategorys, expensesCategory === currItem && styles.expensesCategorySelected]}
							>
								<Text style={styles.categoryText}>{currItem}</Text>
							</TouchableOpacity>
						))}
					</View>
				}

				<TouchableOpacity style={{ flex: 1 }} disabled={isDisabled} onPress={handleSubmit} >
					<Text style={[styles.submitButton, isDisabled && styles.disabledsubmitButton]}>Submit</Text>
				</TouchableOpacity>

			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "stretch",
		justifyContent: "space-between",
		margin: 5,
		marginTop: 100,
	},
	inputContainer: {
		margin: 5,
		marginBottom: 15
	},
	label: {
		color: "lightgray",
		marginLeft: 10,
	},
	input: {
		width: "95%",
		fontSize: 16,
		margin: 10,
		color: "lightgray",
		borderWidth: 0,
		borderBottomWidth: 2,
		borderBottomColor: "#A9A9A9",
	},
	expensesCategorys: {
		width: "28%",
		paddingHorizontal: 25,
		paddingVertical: 5,
		margin: 5,
		fontSize: 15,
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "#846EFD",
		borderRadius: 20,
		color: "red",
		marginBottom: 20
	},
	expensesCategorySelected: {
		backgroundColor: "#846EFD",
		borderRadius: 20,
	},
	transactionCategorys: {
		width: "45%",
		paddingHorizontal: 25,
		paddingVertical: 5,
		margin: 5,
		fontSize: 15,
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "#846EFD",
		borderRadius: 20,
		color: "red",
		marginBottom: 20
	},
	transactionCategorySelected: {
		backgroundColor: "#846EFD",
		borderRadius: 20,
	},
	categoryText: {
		textAlign: "center",
		color: "white",
	},
	submitButton: {
		marginTop: 30,
		marginHorizontal: 12,
		padding: 16,
		color: 'white',
		borderRadius: 100,
		backgroundColor: '#846EFD',
		textAlign: 'center',
	},
	disabledsubmitButton: {
		backgroundColor: '#3C3C3C',
		color: 'lightgray'
	}
});

export default AddExpenseForm;
