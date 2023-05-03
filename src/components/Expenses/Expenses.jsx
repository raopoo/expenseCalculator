import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    const expenseList = props.list;
    return (
        <div className="expenses">
            {expenseList.map((item) => {
                return (
                    <ExpenseItem
                        key = {item.id}
                        title={item.title}
                        date={item.date}
                        amount={item.amount}
                    ></ExpenseItem>
                );
            })}
        </div>
    );
};

export default Expenses;
