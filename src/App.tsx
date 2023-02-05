import React from "react";
import { ThemeProvider } from "styled-components";
import { HomePage } from "./Pages/Home";
import { theme } from "./style/theme";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
