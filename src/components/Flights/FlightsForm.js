import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../../features/cities/citiesSlice";
import { Button } from "@mui/material";
import { CitiesList } from "./CitiesList";

import styles from "./Flights.module.css";

export const FlightsForm = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState({ from: "", to: "" });
  const [travelType, setTravelType] = useState("return");

  const handleChange = (e) => {
    if (e.target.value.length > 1) {
      dispatch(fetchCities(e.target.value));
    }
    setCity({ ...city, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (e) => {
    setTravelType(e.target.value);
  };

  const inpLength = city.from.length > 1;
  return (
    <div className={styles.flightsSearch}>
      <form className={styles.flightsForm}>
        <div className={styles.flightsType}>
          <div>
            <input
              type="radio"
              name="tripType"
              id="return"
              value="return"
              checked={travelType === "return"}
              onChange={handleTypeChange}
            />
            <label htmlFor="return">Return</label>
          </div>
          <div>
            <input
              type="radio"
              name="tripType"
              id="oneway"
              value="one way"
              checked={travelType === "one way"}
              onChange={handleTypeChange}
            />
            <label htmlFor="oneway">OneWay</label>
          </div>
        </div>
        <div className={styles.searchInputsWrapper}>
          <div className={styles.searchInputs}>
            <div className={styles.location}>
              <label htmlFor="from">From</label>
              <input
                type="text"
                name="from"
                id="from"
                value={city.from}
                onChange={handleChange}
              />
              <CitiesList inpLength={inpLength} />
            </div>
            <div className={styles.location}>
              <label htmlFor="to">To</label>
              <input
                type="text"
                name="to"
                id="to"
                value={city.to}
                onChange={handleChange}
              />
              <CitiesList />
            </div>
          </div>
          <div className={styles.flightsDates}>
            <div className={styles.flightsDate}>
              <label htmlFor="dapartDate">Depart</label>
              <input type="date" name="departDate" id="dapartDate" />
            </div>
            <div className={styles.flightsDate}>
              <label htmlFor="returnDate">Return</label>
              <input
                type="date"
                name="returnDate"
                id="returnDate"
                disabled={travelType === "one way"}
              />
            </div>
          </div>
        </div>
        <div>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#00a698",
              "&:hover": { backgroundColor: "#03ccbb" },
            }}
            className={styles.searchButton}
          >
            Search flights
          </Button>
        </div>
      </form>
    </div>
  );
};
