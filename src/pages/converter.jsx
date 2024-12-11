
import React, { useState } from "react";

function Converter() {
  const exchange = {
    USD: {
      EUR: 0.95,
      RUB: 0.100,
      KGS: 86.80,
      YUAN: 7.25,
      LIRA: 34.83,
      POUND: 0.78,
    },
    EUR: {
        USD: 1.06,
        RUB: 105.57,
        KGS: 91.63,
        YUAN: 7.65,
        LIRA: 36.78,
        POUND: 0.83,

    },
    RUB: {
        USD: 0.010,
        EUR: 0.0095,
        KGS: 0.84,
        YUAN: 0.072,
        LIRA: 0.35,
        POUND: 0.0078,
    },
    KGS: {
        USD: 0.012,
        EUR: 0.011,
        RUB: 1.19,
        YUAN: 0.084,
        LIRA: 0.40,
        POUND: 0.0090,
    },
    YUAN: {
        USD: 0.14,
        EUR: 0.13,
        RUB: 13.80,
        KGS: 11.98,
        LIRA: 4.81,
        POUND: 0.11,
    },
    LIRA: {
        USD: 0.029,
        EUR: 0.027,
        RUB: 2.87,
        KGS: 2.49,
        YUAN: 0.21,
        POUND: 0.023,
    },
    POUND: {
        USD: 1.28,
        EUR: 1.21,
        KGS: 110.71,
        RUB: 127.54,
        LIRA: 44.43,
        YUAN: 9.24,
    },
  };

  const currencies = Object.keys(exchange);

  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convert, setConvert] = useState(0);

  const ExchangeRateDisplay = () => {
    const rate = exchange[fromCurrency][toCurrency];
    setConvert(amount * rate);
  };

  return (
    <div className="currency">
      <h1 className="conv mt-3">Currency Converter</h1>
      <div>
        <input
          type="number"
          className="inpConvert mt-3"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <select
          value={fromCurrency} 
          className="selectConvert"
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span className="to">to</span>
        
        <select
          value={toCurrency}
             className="selectConvert"
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <br />
        <button
        className="btnConvert" 
        onClick={ExchangeRateDisplay}>Convert</button>
      </div>
      <h4 className="conv">
        {amount} {fromCurrency} = {convert.toFixed(2)} {toCurrency}
      </h4>
    </div>
  );
};

export default Converter;