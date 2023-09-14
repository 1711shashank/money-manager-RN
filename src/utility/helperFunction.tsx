import { useEffect } from "react";
import { expensesDataArray } from "./dummyData";

export const formatAmount = (amount: number) => {
    const formatedAmount = amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 });
    return formatedAmount;
}

export const calculateTotalExpenses = (transactionData: any) => {
    const { totalIncome, totalExpenses } = transactionData.reduce((totals: { totalIncome: number, totalExpenses: number }, entry: any) => {

        entry.data.forEach((transaction: any) => {

            if (transaction.transactionType === "Income") totals.totalIncome += transaction.amount;
            else if (transaction.transactionType === "Expenses") totals.totalExpenses += transaction.amount;

        });

        return totals;

    }, { totalIncome: 0, totalExpenses: 0 });

    return { totalIncome, totalExpenses };
}
