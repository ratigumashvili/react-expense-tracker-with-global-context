import { useState } from "react";

const NewTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <section className="new-transaction">
      <h2>New Transaction</h2>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="text">Text</label>
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
