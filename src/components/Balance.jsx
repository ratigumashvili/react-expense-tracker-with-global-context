import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((item) => item.amount);
  const total = amounts.reduce((acc, curr) => (acc += curr), 0).toFixed(2);

  return (
    <section className="balance">
      <h3>Your Balance</h3>
      <h2>$ {total}</h2>
    </section>
  );
};

export default Balance;
