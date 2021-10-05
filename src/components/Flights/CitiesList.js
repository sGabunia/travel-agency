import React from "react";
import { useSelector } from "react-redux";

export const CitiesList = () => {
  const cities = useSelector(({ cities }) => cities);
  console.log(cities);
  return <div></div>;
};
