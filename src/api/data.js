import axios from "axios";
const apiKey = "c131ef646emsh23278dbfbf71a98p1a4b35jsn93f2b01d6ddc";
const BASE_URL =
  "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/";

const getCurrencies = async () => {
  const currenciesOptions = {
    method: "GET",
    url: `${BASE_URL}reference/v1.0/currencies`,
    headers: {
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  };
  const response = await axios.request(currenciesOptions);
  return response.data;
};

const getCountries = async () => {
  const countriesOptions = {
    method: "GET",
    url: `${BASE_URL}reference/v1.0/countries/en-US`,
    headers: {
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  };
  const response = await axios.request(countriesOptions);
  return response.data;
};

const getCities = async (city) => {
  const citiesOptions = {
    method: "GET",
    url: `${BASE_URL}autosuggest/v1.0/UK/GBP/en-GB/`,
    params: { query: city },
    headers: {
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "c131ef646emsh23278dbfbf71a98p1a4b35jsn93f2b01d6ddc",
    },
  };

  const response = await axios.request(citiesOptions);
  return response.data;
};

const getAllData = {
  getCurrencies,
  getCountries,
  getCities,
};

export default getAllData;
