import { Ionicons, SimpleLineIcons, Foundation, Feather, MaterialIcons, Entypo } from '@expo/vector-icons';

export const categoryDataArray = [
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
        categoryName: 'Other',
        transactionType: 'Expenses',
        icon: <Feather name="inbox" size={24} color="lightgray" />

    },
];


export const matrixValues = [
    ['1', '2', '3', 'date'],
    ['4', '5', '6', '+'],
    ['7', '8', '9', '-'],
    ['*', '0', 'backspace', 'submit'],
];