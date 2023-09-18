import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

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
];


export const matrixValues = [
    ['1', '2', '3', 'date'],
    ['4', '5', '6', '+'],
    ['7', '8', '9', '-'],
    ['*', '0', 'backspace', 'submit'],
];