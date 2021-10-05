import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchCurrencies } from "./features/currencies/currenciesSlice";
import { fetchCountries } from "./features/countries/countriesSlice";

store.dispatch(fetchCurrencies());
store.dispatch(fetchCountries());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
