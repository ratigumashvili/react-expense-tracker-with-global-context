import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <section className="history-list">
      <h2>History</h2>
      <ul>
        {transactions.map((item) => (
          <TransactionItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default TransactionList;
