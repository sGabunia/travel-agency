import React from "react";

import { FlightsForm } from "./FlightsForm";
import { Wrapper } from "../../utils/Wrapper/Wrapper";

export const Flights = () => {
  return (
    <section>
      <Wrapper>
        <div>
          <h1>Let the journey begin</h1>
        </div>
        <FlightsForm />
      </Wrapper>
    </section>
  );
};
