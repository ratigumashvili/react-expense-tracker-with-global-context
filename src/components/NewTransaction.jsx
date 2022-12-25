import uuid from "react-uuid";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const NewTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    addTransaction({
      id: uuid(),
      text,
      amount: +amount,
    });

    setText("");
    setAmount(0);
  };
  return (
    <section className="new-transaction">
      <h2>New Transaction</h2>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="text">Transaction title</label>
        <input
          type="text"
          id="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="amount">
          Amount <br /> (negative - expense; positive - income)
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add transaction</button>
      </form>
    </section>
  );
};

export default NewTransaction;
