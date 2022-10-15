import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpense = (passExpense) => {
    passExpense = {
      ...passExpense,
      id: Math.random(),
    };
    props.onAddExpense(passExpense);
    setIsEditing(false);
  };

  const CheckEditing = () => {
    setIsEditing(true);
  };

  const BackExpense = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={CheckEditing}>ADD NEW EXPENSE </button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpense}
          onExpenseBack={BackExpense}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
