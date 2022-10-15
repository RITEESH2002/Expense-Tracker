import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const expenses = [
  {
    userId: "e1",
    title: "Dress",
    amount: "230",
    date: new Date(2021, 7, 19),
  },
  {
    userId: "e2",
    title: "Car Insurance",
    amount: "290.4",
    date: new Date(2020, 4, 2),
  },
  {
    userId: "e3",
    title: "Television",
    amount: "604",
    date: new Date(2021, 2, 5),
  },
  {
    userId: "e4",
    title: "House",
    amount: "10324",
    date: new Date(2021, 11, 26),
  },
];
function App() {
  const [InitialExpense, setInitialExpense] = useState(expenses);

  const addExpense = (passFinalExpense) => {
    setInitialExpense((oldExpense) => {
      return [passFinalExpense, ...oldExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense}></NewExpense>
      <Expenses items={InitialExpense}></Expenses>
    </div>
  );
}

export default App;
