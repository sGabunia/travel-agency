import React from "react";
import { useSelector } from "react-redux";

export const CitiesList = ({ inpLength }) => {
  const { cities } = useSelector(({ cities }) => cities);

  return (
    <div style={{ display: inpLength ? "block" : "nonetb" }}>
      <ul>
        {cities.map((city) => (
          <li key={city.PlaceName}>{city.PlaceName}</li>
        ))}
      </ul>
    </div>
  );
};
