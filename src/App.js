import "./styles.css";
import React, { useState } from "react";
// import { ExampleTestData } from "./Data";
import DynamicDropdowns from "./Components/DynamicDropdown";

export default function App() {
  const inputData = {
    Data1: ["Apple", "Ball", "Dog"],
    Data2: ["Car", "Bus", "Lorry"],
    Data3: ["Indra", "Satya", "Dinesh", "Kranthi"],
  };

  return (
    <div>
      <DynamicDropdowns inputData={inputData} />
    </div>
  );
}
