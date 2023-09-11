import { expensesDataArray } from '../utility/dummyData';
import TransactionRocordsByDate from './TransactionRocordsByDate';
import moment from 'moment';


const TransactionBody = () => {
    return (
        <>
            {
                expensesDataArray.map((expensesData, index) => (
                    <TransactionRocordsByDate
                        key={index}
                        date={moment(expensesData.date).format('YYYY-MM-DD')}
                        data={expensesData.data}
                    />
                ))
            }
        </>
    )
}

export default TransactionBody;