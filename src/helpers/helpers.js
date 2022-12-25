export const getStatus = (value) => {
  return value < 0 ? "expense" : "income";
};

export const getSign = (value) => {
  return value < 0 ? `-$ ${Math.abs(value)}` : `+$ ${Math.abs(value)}`;
};
