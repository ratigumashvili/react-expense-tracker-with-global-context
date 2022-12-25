import { useContext } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { GlobalContext } from "../context/GlobalContext";

const COLORS = ["#008000", "#DC143C"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TransactionChart = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((item) => item.amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, curr) => acc + curr, 0);

  const expense = amount
    .filter((item) => item < 0)
    .reduce((acc, curr) => acc + curr, 0);

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: Math.abs(expense) },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend verticalAlign="top" height={36} />
    </PieChart>
  );
};

export default TransactionChart;
