const extractDecimals = (price: number): string => {
  if (isNaN(price)) {
    return "";
  }
  const priceString = price.toString();

  const decimalPart = priceString.split(".")[1] || "00";

  return decimalPart;
};
export default extractDecimals;
