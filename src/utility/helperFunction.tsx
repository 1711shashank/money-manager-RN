import { expensesDataArray } from "./dummyData";

export const formatAmount = (amount: number) => {
    const formatedAmount = amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 });
    return formatedAmount;
}

export const calculateTotalExpenses = () => expensesDataArray.reduce((total, item) => {
    return total + item.data
        .filter(transaction => transaction.transactionCategory === 'Expenses')
        .reduce((sum, transaction) => sum + transaction.amount, 0);
}, 0);

export const calculateTotalIncome = () => expensesDataArray.reduce((total, item) => {
    return total + item.data
        .filter(transaction => transaction.transactionCategory === 'Income')
        .reduce((sum, transaction) => sum + transaction.amount, 0);
}, 0);