import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAllData from "../../api/data";

const initialState = {
  currencies: [],
  status: "idle",
  error: null,
};

export const fetchCurrencies = createAsyncThunk(
  "currencies/fetchCurrencies",
  async () => {
    const response = await getAllData.getCurrencies();
    return response.Currencies;
  }
);

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCurrencies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currencies = state.currencies.concat(action.payload);
      })
      .addCase(fetchCurrencies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default currenciesSlice.reducer;
