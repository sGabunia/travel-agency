import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAllData from "../../api/data";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  citiesTo: [],
  status: "idle",
  error: null,
};

export const fetchCitiesTo = createAsyncThunk(
  "cities/fetchCitiesTo",
  async (city) => {
    const response = await getAllData.getCities(city);
    return response.Places;
  }
);

const citiesToSlice = createSlice({
  name: "citiesTo",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCitiesTo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCitiesTo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.citiesTo = action.payload.map((place) => ({
          ...place,
          id: nanoid(),
        }));
      })
      .addCase(fetchCitiesTo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default citiesToSlice.reducer;
