import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "../features/currencies/currenciesSlice";
import countriesReducer from "../features/countries/countriesSlice";
import regionalSettingsReducer from "../features/regionalSettings/regionalSettingsSlice";
import citiesReducer from "../features/cities/citiesSlice";

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    countries: countriesReducer,
    settings: regionalSettingsReducer,
    cities: citiesReducer,
  },
});
