import React, { useState } from "react";
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Platform } from "react-native";


const AddExpenses = () => {
	const [selectedCategory, setSelectedCategory] = useState("Need");
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [showDatePicker, setShowDatePicker] = useState(false);

	const categoryList = [
		{ label: "Need" },
		{ label: "Want" },
		{ label: "Invest" },
	];

	const handleCategorySelect = (category: string) => {
		setSelectedCategory(category);
	};

	const toggleDatePicker = () => {
		setShowDatePicker(!showDatePicker);
	};

	const formatDate = (date: Date) => {
		return moment(date).format('DD MMM YYYY');
	};

	return (
		<>
			<View style={styles.container}>

				<View style={{ margin: 5, marginBottom: 15 }}>
					<Text style={styles.label}>Amount</Text>
					<TextInput style={styles.input} keyboardType="numeric" />
				</View>

				<View style={{ margin: 5, marginBottom: 15 }}>
					<Text style={styles.label}>Message</Text>
					<TextInput style={styles.input} />
				</View>

				<View style={{ margin: 5, marginBottom: 15 }}>

					<TextInput
						style={styles.input}
						value={formatDate(selectedDate)} 
						onTouchStart={toggleDatePicker}
					/>
					{showDatePicker && (
						<DateTimePicker
							value={selectedDate}
							mode="date"
							display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
							onChange={(event, date) => {
								if (date) {
									setSelectedDate(date);
									toggleDatePicker(); 
								}
							}}
						/>
					)}
				</View>

				<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
					{categoryList.map((categoryData, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => handleCategorySelect(categoryData.label)}
							style={[styles.expensesCategory, selectedCategory === categoryData.label && styles.expensesCategorySelected]}
						>
							<Text style={styles.categoryText}>{categoryData.label}</Text>
						</TouchableOpacity>
					))}
				</View>

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
		placeholderTextColor: "white",
	},
	expensesCategory: {
		width: "26%",
		paddingHorizontal: 25,
		paddingVertical: 5,
		margin: 5,
		fontSize: 15,
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "#00A884",
		borderRadius: 20,
		color: "red",
	},
	expensesCategorySelected: {
		backgroundColor: "#00A884",
		borderRadius: 20,
	},
	categoryText: {
		textAlign: "center",
		color: "white",
	},
});

export default AddExpenses;
