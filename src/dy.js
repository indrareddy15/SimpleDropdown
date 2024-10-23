import React, { useState, useEffect } from "react";

const DynamicDropdowns = ({ inputData }) => {
  const [selectedData, setSelectedData] = useState("");
  const [dropdown2Values, setDropdown2Values] = useState([]);

  useEffect(() => {
    const initialKey = Object.keys(inputData)[0];
    setSelectedData(initialKey);
    setDropdown2Values(inputData[initialKey]);
  }, [inputData]);

  const handleDropdown1Change = (event) => {
    const selectedKey = event.target.value;
    setSelectedData(selectedKey);
    setDropdown2Values(inputData[selectedKey]);
  };

  return (
    <div>
      <h2>Dynamic Dropdown Example</h2>
      <label htmlFor="dropdown1">Select Data Set: </label>
      <select
        id="dropdown1"
        value={selectedData}
        onChange={handleDropdown1Change}
      >
        {Object.keys(inputData).map((key, index) => (
          <option key={index} value={key}>
            {key}
          </option>
        ))}
      </select>

      <label htmlFor="dropdown2">Select Value: </label>
      <select id="dropdown2">
        {dropdown2Values.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

const App = () => {
  const inputData = {
    Data1: ["Apple", "Ball", "Dog"],
    Data2: ["Car", "Bus", "Lorry"],
    Data3: ["Indra", "Satya", "Dinesh", "Kranthi"],
  };

  return <DynamicDropdowns inputData={inputData} />;
};

export default App;
