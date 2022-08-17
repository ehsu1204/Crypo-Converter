const selectionCrypto = ({ cryptoTinkers, onChange }) => {
  return (
    <div className="selection-crypto">
      <select className="crypto-bar" onChange={onChange}>
        <option className="center">Select</option>
        {cryptoTinkers.map((x, index) => {
          return (
            <option className="center" key={index}>
              {x.baseSymbol}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default selectionCrypto;
