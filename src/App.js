import Header from "./Components/Header";
import Form from "./Components/Form";
import Output from "./Components/Output";
import SelectionCrypto from "./Components/Selection-Crypto";
import SelectionCurrency from "./Components/Selection-Currency";
import Footer from "./Components/Footer";
import Swap from "./Components/Swap";
import "./Components/App.css";
import { useEffect, useState } from "react";
import axios from "axios";
const distinctBy = (arr, f) => {
  return arr.filter((a, i) => arr.findIndex((b) => f(a) === f(b)) === i);
};

const urlCrypto = "https://api.coincap.io/v2/markets/";
const urlCurrency =
  "https://exchange-rates.abstractapi.com/v1/live?api_key=a53f23c7fc2b45b3b0a6b2a24984c599&base=USD";

const App = () => {
  const [cryptoOptions, setCryptoOptions] = useState([]);
  const [selectionCurrency, setSelectionCurrency] = useState([]);
  const [selectionCrypto, setSelectionCrypto] = useState("");
  const [value, setValue] = useState("");
  const [currency, setCurrency] = useState("");
  const [conversionCrypto, setConversionCrypto] = useState("");
  const [conversionCurrency, setConversionCurrency] = useState("");

  //Requesting Currency API
  useEffect(() => {
    fetch(urlCurrency)
      .then((response) => response.json())
      .then((data) => setSelectionCurrency(data.exchange_rates));
  }, []);

  //Requesting Crypto  API
  useEffect(() => {
    fetch(urlCrypto)
      .then((res) => res.json())
      .then((data) => {
        const filteredOptions = distinctBy(data.data, (x) => x.baseSymbol);
        setCryptoOptions(filteredOptions);
      });
  }, []);

  const setSelectionsCrypto = (event) => {
    setSelectionCrypto(event.target.value);
    cryptoOptions.map((x) => {
      if (x.baseSymbol === event.target.value) {
        console.log(x.priceUsd);
        setConversionCrypto(x.priceUsd);
      }
    });
  };

  const formChangeCrypto = (event) => {
    setValue(event.target.value);
  };
  const formChangeCurrency = (event) => {
    console.log(event.target.value);
    setCurrency(event.target.value);
    {
      Object.keys(selectionCurrency).map((key, index) => {
        if (key === event.target.value) {
          setConversionCurrency(selectionCurrency[key]);
        }
      });
    }
  };

  return (
    <div className="App">
      <Header />
      <Form formChange={formChangeCrypto} value={value} />
      <SelectionCurrency
        currencyTinkers={selectionCurrency}
        onChange={formChangeCurrency}
      />

      <SelectionCrypto
        onChange={setSelectionsCrypto}
        cryptoTinkers={cryptoOptions}
      />
      <Output
        value={value}
        conversion={conversionCrypto}
        selection={selectionCrypto}
        currency={currency}
        currencyTinkers={selectionCurrency}
        conversionCurrency={conversionCurrency}
      ></Output>

      <Footer />
    </div>
  );
};

export default App;
