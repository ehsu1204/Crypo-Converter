const selectionCurrency = ({ currencyTinkers, onChange }) => {
  return (
    <div className="selection-crypto">
      <select className="crypto-bar" onChange={onChange}>
        <option className="center">Select</option>
        {Object.keys(currencyTinkers).map((key, index) => {
          return (
            <option className="center" key={index}>
              {key}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default selectionCurrency;
