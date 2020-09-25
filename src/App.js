import React from "react";
import HomePage from "./components/Homepage";
import styled from "styled-components";

const Text = styled.main`
  all: unset;
  margin: right;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-family: "Courier New";
  color: #474747;
`;

function App() {
  return (
    <Text>
      <h1>Search a country to see its Data</h1>
      <div>
        <HomePage />
      </div>
    </Text>
  );
}

export default App;
