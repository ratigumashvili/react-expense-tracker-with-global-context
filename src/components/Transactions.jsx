import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

import TransactionChart from "./TransactionChart";
import TransactionItem from "./TransactionItem";

const Transactions = () => {
  const [view, setView] = useState("list");
  const { transactions } = useContext(GlobalContext);

  const handleChangeView = () => {
    view === "list" ? setView("chart") : setView("list");
  };

  return (
    <section className="history-list">
      {transactions.length !== 0 && (
        <>
          <div className="title-holder">
            <h2>History</h2>
            <button
              onClick={handleChangeView}
              title={view === "list" ? "Chart view" : "List view"}
            >
              {view === "list" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-2 h-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-2 h-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              )}
            </button>
          </div>
          {view === "list" ? (
            <ul>
              {transactions.map((item) => (
                <TransactionItem key={item.id} {...item} />
              ))}
            </ul>
          ) : (
            <TransactionChart />
          )}
        </>
      )}
    </section>
  );
};

export default Transactions;
