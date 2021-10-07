import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "../features/currencies/currenciesSlice";
import countriesReducer from "../features/countries/countriesSlice";
import regionalSettingsReducer from "../features/regionalSettings/regionalSettingsSlice";
import citiesFromReducer from "../features/cities/citiesFromSlice";
import citiesToReducer from "../features/cities/citiesToSlice";

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    countries: countriesReducer,
    settings: regionalSettingsReducer,
    citiesFrom: citiesFromReducer,
    citiesTo: citiesToReducer,
  },
});
