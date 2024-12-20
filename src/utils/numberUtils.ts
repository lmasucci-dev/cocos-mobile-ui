export const calculatePercentage = (close: number, last: number): string => {
  const percentage = ((last - close) / close) * 100;
  return percentage.toFixed(2);
};
