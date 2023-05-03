import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import './Expenses.css';

const Expenses = (props) => {
    const expenseList = props.list;
    return (
        <Card className="expenses">
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
        </Card>
    );
};

export default Expenses;
