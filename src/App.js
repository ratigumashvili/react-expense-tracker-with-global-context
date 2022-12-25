import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import IncomeExpense from "./components/IncomeExpense";
import NewTransaction from "./components/NewTransaction";

import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <GlobalProvider>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <NewTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
