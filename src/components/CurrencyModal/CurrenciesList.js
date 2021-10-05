import React from "react";

export const CurrenciesList = ({ Code, Symbol }) => {
  return (
    <option value={Code}>
      {Code} - {Symbol}
    </option>
  );
};
