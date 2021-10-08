import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesFrom } from "../../features/cities/citiesFromSlice";
import { fetchCitiesTo } from "../../features/cities/citiesToSlice";
import { Button } from "@mui/material";
import { CitiesList } from "./CitiesList";

import styles from "./Flights.module.css";

export const FlightsForm = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState({ from: "", to: "" });
  const [selectedFromCity, setSelectedFromCity] = useState(null);
  const [selectedToCity, setSelectedToCity] = useState(null);
  const [departDate, setDepartDate] = useState("2021-10-08");
  const [returnDate, setReturnDate] = useState("2021-10-15");
  const [travelType, setTravelType] = useState("return");

  console.log(selectedFromCity);
  console.log(selectedToCity);

  const { citiesFrom } = useSelector(({ citiesFrom }) => citiesFrom);
  const { citiesTo } = useSelector(({ citiesTo }) => citiesTo);

  const [isCityFromShown, setisCityFromShown] = useState(false);
  const [isCityToShown, setisCityToShown] = useState(false);

  const handleFromIsShown = () => {
    setisCityFromShown(false);
  };

  const handleToIsShown = () => {
    setisCityToShown(false);
  };

  const handleChange = (e) => {
    setCity({ ...city, [e.target.name]: e.target.value });
    if (e.target.name === "from" && e.target.value.length > 1) {
      dispatch(fetchCitiesFrom(city.from));
      setisCityFromShown(true);
    }
    if ((e.target.name === "to") & (e.target.value.length > 1)) {
      dispatch(fetchCitiesTo(city.to));
      setisCityToShown(true);
    }
  };

  const handleSearchFrom = (id) => {
    const selected = citiesFrom.find((city) => city.id === id);
    setSelectedFromCity(selected);
    setCity({ ...city, from: selected.PlaceName });
  };

  const handleSearchTo = (id) => {
    const selected = citiesTo.find((city) => city.id === id);
    setSelectedToCity(selected);
    setCity({ ...city, to: selected.PlaceName });
  };

  const handleTypeChange = (e) => {
    setTravelType(e.target.value);
  };

  const handleDepartDateChange = (e) => {
    setDepartDate(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
  };

  console.log(departDate);

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
            <div className={`${styles.location} ${styles.locationFrom}`}>
              <label htmlFor="from">From</label>
              <input
                type="text"
                name="from"
                id="from"
                value={city.from}
                onChange={handleChange}
                autoComplete="off"
              />
              <CitiesList
                cities={citiesFrom}
                handleCitySuggestion={handleSearchFrom}
                isShown={isCityFromShown && city.from.length}
                handleIsShown={handleFromIsShown}
              />
            </div>
            <div className={`${styles.location} ${styles.locationTo}`}>
              <label htmlFor="to">To</label>
              <input
                type="text"
                name="to"
                id="to"
                value={city.to}
                onChange={handleChange}
                autoComplete="off"
              />
              <CitiesList
                cities={citiesTo}
                handleCitySuggestion={handleSearchTo}
                isShown={isCityToShown && city.to.length}
                handleIsShown={handleToIsShown}
              />
            </div>
          </div>
          <div className={styles.flightsDates}>
            <div className={styles.flightsDate}>
              <label htmlFor="dapartDate">Depart</label>
              <input
                type="date"
                name="departDate"
                id="dapartDate"
                onChange={handleDepartDateChange}
                value={departDate}
              />
            </div>
            <div className={styles.flightsDate}>
              <label htmlFor="returnDate">Return</label>
              <input
                type="date"
                name="returnDate"
                id="returnDate"
                onChange={handleReturnDateChange}
                value={returnDate}
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
