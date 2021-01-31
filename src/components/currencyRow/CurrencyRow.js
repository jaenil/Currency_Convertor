import React from "react";
import "./CurrencyRow.css";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;
  return (
    <div className="currencyRow">
      <p>Chooose Currency</p>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {" "}
            {option}{" "}
          </option>
        ))}
      </select>
      <p>Amount</p>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
    </div>
  );
}
