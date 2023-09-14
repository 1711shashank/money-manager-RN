import React, { useState } from "react";
import moment from 'moment';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Platform, Modal } from "react-native";

const expensesCategoryArray: string[] = ["Need", "Want", "Invest"];
const transactionCategoryArray: string[] = ["Expenses", "Income"];


const NewTransactionForm = ({ modalVisible, setModalVisible }: any) => {
	const [amount, setAmount] = useState<number>(0);
	const [message, setMessage] = useState<string>('');
	const [date, setDate] = useState<Date>(new Date());
	const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
	const [budgetCategory, setBudgetCategory] = useState<string>("Need");
	const [transactionType, setTransactionType] = useState<string>("Expenses");
	const [isDisabled, setIsDisabled] = useState<boolean>(true);


	const handleAmountChange = (num: string) => {
		const parsedAmount = parseInt(num);
		setAmount(parsedAmount);
		setIsDisabled(!parsedAmount || parsedAmount === 0);
	};

	const toggleDatePicker = () => {
		setShowDatePicker(!showDatePicker);
	};

	const postDataToBackend = async (newData: Object) => {
		try {
			await axios.post('https://moneymanagerserver.onrender.com/addData', newData);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const handleSubmit = () => {

		const newData = {
			date: moment(date).format('DD MMM YYYY'),
			data: {
				amount,
				message,
				transactionType,
				expensesCategory: "Food",
				budgetCategory: transactionType === 'Expenses' ? budgetCategory : null,
			}
		};

		postDataToBackend(newData);
		setModalVisible(false);
	};

	return (
		<View>
			<Modal
				animationType="slide"
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}>
				<View style={styles.container}>

					<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
						{transactionCategoryArray.map((currItem, index) => (
							<TouchableOpacity
								key={index}
								onPress={() => setTransactionType(currItem)}
								style={[styles.transactionCategorys, transactionType === currItem && styles.transactionCategorySelected]}
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
						transactionType === "Expenses"
						&&
						<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
							{expensesCategoryArray.map((currItem, index) => (
								<TouchableOpacity
									key={index}
									onPress={() => setBudgetCategory(currItem)}
									style={[styles.expensesCategorys, budgetCategory === currItem && styles.expensesCategorySelected]}
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

			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		padding: 5,
		paddingTop: 100,
		alignItems: "stretch",
		backgroundColor: '#1A1A1A',
		justifyContent: "space-between",
	},
	inputContainer: {
		margin: 5,
		marginBottom: 15
	},
	label: {
		color: "lightgrey",
		marginLeft: 10,
	},
	input: {
		width: "95%",
		fontSize: 16,
		margin: 10,
		color: "lightgray",
		borderWidth: 0,
		borderBottomWidth: 2,
		borderBottomColor: "lightgray",
	},
	expensesCategorys: {
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
	expensesCategorySelected: {
		backgroundColor: "#846EFD",
		borderRadius: 20,
	},
	transactionCategorys: {
		width: "45%",
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

export default NewTransactionForm;
