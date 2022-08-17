const Output = ({
  value,
  conversion,
  selection,
  currency,
  conversionCurrency,
}) => {
  console.log(value);
  console.log(currency);
  console.log(conversionCurrency);
  if (
    selection &&
    selection != "Select" &&
    value &&
    conversionCurrency != "Select"
  ) {
    return (
      <div className="output">
        <p className="text">
          {value} {currency} is equal to{" "}
          {(value / conversion / conversionCurrency).toFixed(5)} {selection}
        </p>
      </div>
    );
  } else if (!selection && !value && !conversionCurrency) {
    return (
      <div className="output">
        <p>Please Select a Currency, CryptoCurrency, and enter an Amount</p>
      </div>
    );
  } else if (!value && !selection) {
    return (
      <div className="output">
        <p>Please enter a CryptoCurrency and Amount</p>
      </div>
    );
  } else if (!selection && conversionCurrency) {
    return (
      <div className="output">
        <p>Please select a CryptoCurrency</p>
      </div>
    );
  } else if (selection && !conversionCurrency && !value) {
    return (
      <div className="output">
        <p>Please select a Currency and enter an Amount</p>
      </div>
    );
  } else if (selection && conversionCurrency) {
    return (
      <div className="output">
        <p>Please enter an Amount</p>
      </div>
    );
  } else {
    return (
      <div className="output">
        <p>Please select a Currency and CryptoCurrency</p>
      </div>
    );
  }
};

export default Output;
