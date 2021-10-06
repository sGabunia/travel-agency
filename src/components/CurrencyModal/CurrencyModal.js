import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseSettings } from "../../features/regionalSettings/regionalSettingsSlice";
import { Button } from "@mui/material";
import styles from "./CurrencyModal.module.css";
import { CountriesList } from "./CountriesList";
import { CurrenciesList } from "./CurrenciesList";
import { RegionLogo } from "../../icons/RegionLogo";
import { CurrenciesLogo } from "../../icons/CurrenciesLogo";
import { CloseIcon } from "../../icons/CloseIcon";

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

  const handleSettings = (e) => {
    e.preventDefault();
    dispatch(chooseSettings({ currency: currencyValue, region: countryValue }));
    closeModal();
  };

  return (
    <section className={styles.modal}>
      <header className={styles.modalHeader}>
        <h2>Regional Settings</h2>

        <button onClick={closeModal}>
          <CloseIcon />
        </button>
      </header>
      <div className={styles.modalContent}>
        <form onSubmit={handleSettings}>
          <fieldset>
            <label htmlFor="countries">
              {" "}
              <RegionLogo />
              Country/Region
            </label>
            <select
              name="countries"
              id="countries"
              className={styles.counties}
              value={countryValue}
              onChange={(e) => setcountryValue(e.target.value)}
            >
              {countries.map((country) => (
                <CountriesList key={country.Code} {...country} />
              ))}
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="currencies">
              <CurrenciesLogo /> Currency
            </label>
            <select
              name="currencies"
              id="currencies"
              className={styles.currencies}
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
          <fieldset className={styles.buttonGroup}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00a698",
                "&:hover": { backgroundColor: "#03ccbb" },
              }}
              type="submit"
            >
              Save
            </Button>
            <Button variant="outlined" onClick={closeModal}>
              Cancel
            </Button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
