import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { vars, classes } from "@fastcampus/themes";
import styled from "@emotion/styled";

function App() {
  return <View />;
}

export default App;

const View = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Text>font color is {vars.colors.$static.light.red[300]}</Text>
      <a
        className="headingxl"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

const Text = styled.p`
  ${classes.typography.heading["3xl"]}
  color: ${vars.colors.$static.light.red[300]};
`;
