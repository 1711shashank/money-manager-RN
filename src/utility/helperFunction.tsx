import axios from "axios";
import { categoryDataArray } from "./staticData";

export const toString_MonthsAndYear = (date: Date) => {
    return `${date.toLocaleString('en-US', { month: 'short' })} ${date.getFullYear()}`
}

export const formatAmount = (amount: number) => {
    const formatedAmount = amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 });
    return formatedAmount;
}

export const calculateTotalExpenses = (transactionData: any) => {
    const { totalIncome, totalExpenses } = transactionData.reduce(
        (totals: { totalIncome: number; totalExpenses: number }, entry: any) => {
            entry.data.forEach((transaction: any) => {

                const matchingCategory = categoryDataArray.find((category) => category.id === transaction.iconId);

                if (matchingCategory) {
                    if (matchingCategory.transactionType === 'Income') totals.totalIncome += transaction.amount;
                    else if (matchingCategory.transactionType === 'Expenses') totals.totalExpenses += transaction.amount;
                }
            });

            return totals;
        },
        { totalIncome: 0, totalExpenses: 0 }
    );

    return { totalIncome, totalExpenses };
};

export const extractMonthsAndYears = (dateArray: any[]) => {

    const extractData = dateArray.map((item: any) => new Date(item.date));
    const sortedDates = extractData.sort((a, b) => b.getTime() - a.getTime());
    sortedDates.push(new Date());       // current date must be present in the array

    const uniqueMonthsAndYears: string[] = [];

    sortedDates.filter((date: any) => {

        const monthYear = toString_MonthsAndYear(date);

        if (!uniqueMonthsAndYears.includes(monthYear)) {
            uniqueMonthsAndYears.push(monthYear);
        }

    });

    return uniqueMonthsAndYears;
}

export const sortDataByDate = (data:any) => {
    data.sort((a:any, b:any) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        return 0;
    });

    return data;
};

export const filterDataByMonth = (transactionData: any, selectedMonth: any) => {

    const selectedMonthData = transactionData.filter((item: any) => {

        const itemMonth = toString_MonthsAndYear(new Date(item.date));
        if (selectedMonth === itemMonth) return item;

    })

    const sortedData = sortDataByDate(selectedMonthData);


    return sortedData;
}

export const calculateString = (amountString: string) => {
    if (amountString.endsWith('+') || amountString.endsWith('-') || amountString.endsWith('*')) {
        amountString = amountString.slice(0, -1);
    }

    const result = eval(amountString.replace(/[^-+*/\d.]/g, ''));
    return result.toString()
}

export const getCategoryData = (item: any) => {
    const matchingCategory = categoryDataArray.find((categoryData) => categoryData.id === item.iconId)
    return matchingCategory;
}

export const postDataToBackend = async (newData: Object) => {
    try {
        await axios.post('https://moneymanagerserver.onrender.com/addData', newData);
    } catch (error) {
        console.error('Error:', error);
    }
};

export const calculate_BudgetPieChart = (selectedMonthData: any) => {
    const initialCartData = [
        { title: 'Need', amount: 0 },
        { title: 'Want', amount: 0 },
        { title: 'Invest', amount: 0 },
    ];

    const chartData = selectedMonthData.reduce((acc: any, entry: any) => {
        for (const expense of entry.data) {

            const categoryIndex = acc.findIndex((item: any) => item.title === expense.budgetCategory);
            if (categoryIndex !== -1) acc[categoryIndex].amount += expense.amount;

        }
        return acc;
    }, initialCartData);

    const { totalIncome, totalExpenses } = calculateTotalExpenses(selectedMonthData);
    chartData.push({ title: 'Remining', amount: (totalIncome - totalExpenses) });

    return chartData;
}

export const calculate_ExpensesPieChart = (selectedMonthData: any) => {

    const chartData = selectedMonthData.reduce((acc: any, entry: any) => {

        entry.data.forEach((item: any) => {
            const category = categoryDataArray.find((categoryItem: any) => (categoryItem.id === item.iconId && categoryItem.id < 100));
            if (category) {

                const existingItem = acc.find((chartItem: any) => chartItem.title === category.categoryName);
                if (existingItem) existingItem.amount += item.amount;
                else acc.push({ title: category.categoryName, amount: item.amount });

            }

        });
        return acc;
    }, []);

    return chartData;
}

export const generateColors = (length: any) => {
    const colors = [];
    const hueStep = 360 / length;
    const lightness: number = 70;

    for (let i = 0; i < length; i++) {
        const hue = i * hueStep;
        const color = `hsl(${hue}, 70%, ${lightness}%)`;
        colors.push(color);
    }

    return colors;
};
