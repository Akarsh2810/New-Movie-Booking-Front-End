import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./layouts/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Route path = "/" component = {LandingPage}/>
    </BrowserRouter>
  );
}

export default App;
