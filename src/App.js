import React from "react";
import "./App.css";
import {
  Header,
  Balance,
  IncomeExpenses,
  TransactionList,
  AddTransaction,
} from "./components";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div>
        <Header title={"Expense Tracker"} />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
