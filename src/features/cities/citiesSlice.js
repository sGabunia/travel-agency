import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAllData from "../../api/data";

const initialState = {
  cities: [],
  status: "idle",
  error: null,
};

export const fetchCities = createAsyncThunk(
  "cities/fetchCities",
  async (city) => {
    const response = await getAllData.getCities(city);
    return response.Places;
  }
);

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCities.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default citiesSlice.reducer;
