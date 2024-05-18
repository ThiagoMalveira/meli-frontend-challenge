const convertPrice = (price: number, currency: string): string => {
  if (isNaN(price)) {
    throw new Error("Invalid price value");
  }
  try {
    let locale;
    switch (currency) {
      case "USD": {
        locale = "en-US";
        break;
      }
      case "EUR": {
        locale = "fr-FR";
        break;
      }
      case "BRL": {
        locale = "pt-BR";
        break;
      }
    }

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(price);
  } catch (err) {
    throw new Error(`Cannot convert price value`);
  }
};

export default convertPrice;
