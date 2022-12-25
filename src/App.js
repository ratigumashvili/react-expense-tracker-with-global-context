import Balance from "./components/Balance";
import Header from "./components/Header";
import Transactions from "./components/Transactions";
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
        <Transactions />
        <NewTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
