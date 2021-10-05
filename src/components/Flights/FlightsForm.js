import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../../features/cities/citiesSlice";
import { Button } from "@mui/material";
import { CitiesList } from "./CitiesList";

export const FlightsForm = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length > 1) {
      dispatch(fetchCities(e.target.value));
    }
    setCity(e.target.value);
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="return">Return</label>
          <input type="radio" name="tripType" id="return" />
          <label htmlFor="oneway">One Way</label>
          <input type="radio" name="tripType" id="oneway" />
        </div>
        <div>
          <div>
            <div>
              <label htmlFor="from">From</label>
              <input
                type="text"
                name="from"
                id="from"
                value={city}
                onChange={handleChange}
              />
              <CitiesList />
            </div>
            <div>
              <label htmlFor="to">To</label>
              <input type="text" name="to" id="to" />
              <CitiesList />
            </div>
          </div>
          <div>
            <label htmlFor="dapartDate">depart</label>
            <input type="date" name="departDate" id="dapartDate" />
            <label htmlFor="returnDate">return</label>
            <input type="date" name="returnDate" id="returnDate" />
          </div>
        </div>
        <div>
          <Button>Search flights</Button>
        </div>
      </form>
    </div>
  );
};
