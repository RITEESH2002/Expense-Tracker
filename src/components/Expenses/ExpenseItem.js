import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//props means properties:parameter
function ExpenseItem(props) {
  //const ExpenseDate=new Date(2021,2,28);
  //year,month(0-11),date
  //.ISOString() to convert DATE in string format else error bcoz an object
  //const ExpenseTitle="Car Insurance";
  //const ExpensePrice= 290.45;
  // const month=props.date.toLocaleString("en-us",{month:"long"});
  // const day=props.date.toLocaleString("en-us",{day:"2-digit"});
  // const year=props.date.getFullYear();
  

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
      
    </Card>
  );
}

export default ExpenseItem;
