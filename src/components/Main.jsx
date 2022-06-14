import React from "react";
import Count from "./Count";
import Fetch from "./Fetch";
import Fetch2 from "./Fetch2";


function Main({ description }) {
  return (
    <main>
      <p>{description}</p>
      <Count />
      <Fetch />
      <Fetch2 />
    </main>
  );
}

export default Main;
