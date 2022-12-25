import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const getAllNums = transactions.map((item) => item.amount);
  const getPositiveNums = getAllNums.filter((num) => num > 0);
  const getTotal = getPositiveNums.reduce((acc, curr) => acc + curr, 0);

  return (
    <section className="balance">
      <h3>Your Balance</h3>
      <h2>$ {getTotal}</h2>
    </section>
  );
};

export default Balance;
