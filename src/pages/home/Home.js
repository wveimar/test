import React, { useState } from "react";
import file from "../../production.csv";
import Production from "./Production";

const Home = () => {
  
  return (
    <>
      <label htmlFor="csvInput" style={{ display: "block" }}>
        tabla uno
      </label>
      <div className="container">
        <Production />
      </div>
    </>
  );
};

export default Home;
