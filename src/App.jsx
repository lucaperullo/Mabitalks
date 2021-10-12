import React, { useState } from "react";

import "./App.css";
import { StateProvider } from "./contextApi/stateProvider";
import { initialState, reducer } from "./contextApi/reducer";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";

const App = () => {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Navbar />
        <Section />
      </StateProvider>
    </>
  );
};

export default App;
