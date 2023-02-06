import React from "react";
import { ThemeProvider } from "styled-components";
import { HomePage } from "./Pages/Home";
import { theme } from "./style/theme";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className={"content"}>
          <HomePage />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
