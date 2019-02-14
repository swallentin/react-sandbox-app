import React, { Component, HTMLProps } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Test: React.FunctionComponent<HTMLProps<HTMLDivElement>> = ({
  className
}) => <div className={className}>Testing</div>;

const StyledComponent = styled(Test)`
  font-size: 12em;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StyledComponent />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
