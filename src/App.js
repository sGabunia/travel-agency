import React from "react";
import "./App.css";
import { Flights } from "./components/Flights/Flights";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Flights />
    </div>
  );
}

export default App;
