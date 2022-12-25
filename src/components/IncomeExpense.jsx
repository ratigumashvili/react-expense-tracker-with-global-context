import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((item) => item.amount);

  const positive = amounts.filter((num) => num > 0);
  const negative = amounts.filter((num) => num < 0);

  const totalPositive = positive
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  const totalNegative = negative
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  return (
    <section className="income-expense">
      <div className="income">
        <h2>Income</h2>
        <span>$ {totalPositive}</span>
      </div>
      <div className="expense">
        <h2>Expense</h2>
        <span>$ {totalNegative}</span>
      </div>
    </section>
  );
};

export default IncomeExpense;
