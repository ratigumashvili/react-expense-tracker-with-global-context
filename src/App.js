import Balance from "./components/Balance";
import Header from "./components/Header";
import HistoryList from "./components/HistoryList";
import IncomeExpense from "./components/IncomeExpense";
import NewTransaction from "./components/NewTransaction";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Balance />
      <IncomeExpense />
      <HistoryList />
      <NewTransaction />
    </div>
  );
}

export default App;
