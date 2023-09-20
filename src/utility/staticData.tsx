import { Ionicons, SimpleLineIcons, Foundation, Feather, MaterialIcons, Entypo, FontAwesome, Octicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';


export const budgetCategoryArray = ["Need", "Want", "Invest"];


export const categoryDataArray = [
    //Expenses
    {
        id: 1,
        categoryName: 'Food',
        transactionType: 'Expenses',
        icon: <Ionicons name='fast-food-outline' size={24} color='lightgray' />
    },
    {
        id: 2,
        categoryName: 'Transportation',
        transactionType: 'Expenses',
        icon: <MaterialIcons name="emoji-transportation" size={24} color="lightgray" />
    },
    {
        id: 3,
        categoryName: 'Shopping',
        transactionType: 'Expenses',
        icon: <Feather name="shopping-cart" size={24} color="lightgray" />
    },
    {
        id: 4,
        categoryName: 'Insurance',
        transactionType: 'Expenses',
        icon: <Ionicons name="shield-checkmark-outline" size={24} color="lightgray" />
    },
    {
        id: 5,
        categoryName: 'Tea/Coffee',
        transactionType: 'Expenses',
        icon: <SimpleLineIcons name="cup" size={24} color="lightgray" />
    },
    {
        id: 6,
        categoryName: 'Gift',
        transactionType: 'Expenses',
        icon: <Ionicons name="gift-outline" size={24} color="lightgray" />
    },
    {
        id: 7,
        categoryName: 'Gadgets',
        transactionType: 'Expenses',
        icon: <Entypo name="mobile" size={24} color="lightgray" />
    },
    {
        id: 8,
        categoryName: 'Petrol',
        transactionType: 'Expenses',
        icon: <MaterialIcons name="local-parking" size={24} color="lightgray" />
    },
    {
        id: 9,
        categoryName: 'Graduation',
        transactionType: 'Expenses',
        icon: <SimpleLineIcons name="graduation" size={24} color="lightgray" />
    },
    {
        id: 10,
        categoryName: 'Bills',
        transactionType: 'Expenses',
        icon: <Feather name="credit-card" size={24} color="lightgray" />
    },
    {
        id: 11,
        categoryName: 'Travel',
        transactionType: 'Expenses',
        icon: <MaterialIcons name="flight-takeoff" size={24} color="lightgray" />
    },
    {
        id: 12,
        categoryName: 'Health',
        transactionType: 'Expenses',
        icon: <Foundation name="first-aid" size={24} color="lightgray" />
    },
    {
        id: 13,
        categoryName: 'Entertainment',
        transactionType: 'Expenses',
        icon: <Ionicons name="game-controller-outline" size={24} color="lightgray" />
    },
    {
        id: 14,
        categoryName: 'Rent',
        transactionType: 'Expenses',
        icon: <Ionicons name="bed-outline" size={24} color="lightgray" />
    },
    {
        id: 15,
        categoryName: 'Wine',
        transactionType: 'Expenses',
        icon: <Ionicons name="wine-outline" size={24} color="lightgray" />
    },
    {
        id: 16,
        categoryName: 'SIP',
        transactionType: 'Expenses',
        icon: <FontAwesome5 name="piggy-bank" size={24} color="lightgray" />
    },
    {
        id: 17,
        categoryName: 'Stocks',
        transactionType: 'Expenses',
        icon: <SimpleLineIcons name="graph" size={24} color="lightgray" />
    },
    {
        id: 18,
        categoryName: 'Bonds',
        transactionType: 'Expenses',
        icon: <Octicons name="note" size={24} color="lightgray" />
    },
    {
        id: 19,
        categoryName: 'FD/RD',
        transactionType: 'Expenses',
        icon: <MaterialCommunityIcons name="bank-outline" size={24} color="lightgray" />
    },
    {
        id: 20,
        categoryName: 'Other',
        transactionType: 'Expenses',
        icon: <Feather name="command" size={24} color="lightgray" />
    },

    //Incomes
    {
        id: 101,
        categoryName: 'Salary',
        transactionType: 'Income',
        icon: <MaterialCommunityIcons name="bank-outline" size={24} color="lightgray" />
    },
    {
        id: 102,
        categoryName: 'Pocket Money',
        transactionType: 'Income',
        icon: <Ionicons name="wallet-outline" size={24} color="lightgray" />
    },
    {
        id: 103,
        categoryName: 'Refunds',
        transactionType: 'Income',
        icon: <SimpleLineIcons name="refresh" size={24} color="lightgray" />
    },
    {
        id: 104,
        categoryName: 'Awards',
        transactionType: 'Income',
        icon: <MaterialCommunityIcons name="hand-coin-outline" size={24} color="lightgray" />
    },
    {
        id: 105,
        categoryName: 'Lottery',
        transactionType: 'Income',
        icon: <FontAwesome name="money" size={24} color="lightgray" />
    },
    {
        id: 106,
        categoryName: 'Rental',
        transactionType: 'Income',
        icon: <MaterialIcons name="storefront" size={24} color="lightgray" />
    },
    {
        id: 107,
        categoryName: 'Investment',
        transactionType: 'Income',
        icon: <Octicons name="graph" size={24} color="lightgray" />
    },
    {
        id: 108,
        categoryName: 'Others',
        transactionType: 'Income',
        icon: <Feather name="command" size={24} color="lightgray" />
    },

];


export const matrixValues = [
    ['1', '2', '3', 'date'],
    ['4', '5', '6', '+'],
    ['7', '8', '9', '-'],
    ['*', '0', 'backspace', 'submit'],
];