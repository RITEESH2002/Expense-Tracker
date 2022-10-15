import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart"
import "./ExpensesFilter.css";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList"


function Expenses(props) {
  const [constantYear, setConstantYear] = useState("2021");
  const filteredExpenses = props.items.filter((expense=>{
    return expense.date.getFullYear().toString()===constantYear;
  }))
  const dropdownFilter = (passYear) => {
    setConstantYear(passYear);
  };
  
  
  return (
    <div>
      <Card className="ExpenseStyle">
        <ExpensesFilter
          selected={constantYear}
          onFilterChange={dropdownFilter}
        ></ExpensesFilter>
         <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}></ExpensesList>

        { /*TYPICAL JAVASCRIPT STYLE*/ }
        {/* {
          filteredExpenses.length===0 && <p>NO EXPENSES FOUND</p>
        }
        {
          filteredExpenses.length>0 &&  (filteredExpenses.map((expense) => 
          <ExpenseItem
            key={expense.userId}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
             ></ExpenseItem>
        ))}      */}
    
    {/*TERNARY OPERATOR FORM */}
  {/* {filteredExpenses.length==0 ? <p>NO EXPENSES FOUND</p> :  (filteredExpenses.map((expense) => 
    <ExpenseItem
      key={expense.userId}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
       ></ExpenseItem>
  ))}     
         */}
      </Card>
    </div>
  );
};

export default Expenses;
