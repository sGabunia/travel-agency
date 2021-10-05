import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAllData from "../../api/data";

const initialState = {
  countries: [],
  status: "idle",
  error: null,
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await getAllData.getCountries();
    return response.Countries;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.countries = state.countries.concat(action.payload);
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
