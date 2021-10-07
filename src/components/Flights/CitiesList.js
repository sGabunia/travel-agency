import React from "react";
import styles from "./Flights.module.css";

export const CitiesList = ({
  cities,
  isShown,
  handleCitySuggestion,
  handleIsShown,
}) => {
  const handleChooseCity = (id) => {
    handleCitySuggestion(id);
    handleIsShown();
  };

  return (
    <>
      {isShown ? (
        <div className={`${styles.flightsAutosuggestion}`}>
          <ul className={styles.lightsAutosuggestionList}>
            {cities?.map((city) => (
              <li key={city.id} onClick={() => handleChooseCity(city.id)}>
                {city.PlaceName}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};
