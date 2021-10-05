import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseSettings } from "../../features/regionalSettings/regionalSettingsSlice";
import { Button } from "@mui/material";
import styles from "./CurrencyModal.module.css";
import { CountriesList } from "./CountriesList";
import { CurrenciesList } from "./CurrenciesList";

export const CurrencyModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { region, currency } = useSelector(({ settings }) => settings);
  const countries = useSelector(({ countries }) => countries.countries);
  const currencies = useSelector(({ currencies }) => currencies.currencies);

  const [countryValue, setcountryValue] = useState(region);
  const [currencyValue, setCurrencyValue] = useState(currency);

  const popularCurrencies = currencies.filter(
    (currency) =>
      currency.Code === "USD" ||
      currency.Code === "EUR" ||
      currency.Code === "GBP"
  );

  console.log(countryValue);

  const handleSettings = (e) => {
    e.preventDefault();
    dispatch(chooseSettings({ currency: currencyValue, region: countryValue }));
    closeModal();
  };

  return (
    <section className={styles.modal}>
      <header className={styles.modalHeader}>
        <h2>Regional Settings</h2>
        <button>close</button>
      </header>
      <div className={styles.modalContent}>
        <form onSubmit={handleSettings}>
          <fieldset>
            <label htmlFor="countries">Country/Region</label>
            <select
              name="countries"
              id="countries"
              value={countryValue}
              onChange={(e) => setcountryValue(e.target.value)}
            >
              {countries.map((country) => (
                <CountriesList key={country.Code} {...country} />
              ))}
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="currencies">Currency</label>
            <select
              name="currencies"
              id="currencies"
              value={currencyValue}
              onChange={(e) => setCurrencyValue(e.target.value)}
            >
              <optgroup label="Popular currencies">
                {popularCurrencies.map((currency) => (
                  <CurrenciesList key={currency.Code} {...currency} />
                ))}
              </optgroup>
              <optgroup label="Other currencies">
                {currencies.map((currency) => (
                  <CurrenciesList key={currency.Code} {...currency} />
                ))}
              </optgroup>
            </select>
          </fieldset>
          <fieldset>
            <Button type="submit">Save</Button>
            <Button onClick={closeModal}>Calcel</Button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
