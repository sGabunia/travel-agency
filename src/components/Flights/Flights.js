import React from "react";
import styles from "./Flights.module.css";

import { FlightsForm } from "./FlightsForm";
import { Wrapper } from "../../utils/Wrapper/Wrapper";

export const Flights = () => {
  return (
    <section className={styles.flights}>
      <Wrapper>
        <div>
          <h1 className={styles.title}>Let the journey begin</h1>
        </div>
        <FlightsForm />
      </Wrapper>
    </section>
  );
};
