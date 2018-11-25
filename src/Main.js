import React from "react";
import { Switch, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Summary from "./pages/Summary";
// import MainForm from "./components/MainForm.jsx";
// import Roster from "./Roster";
// import Schedule from "./Schedule";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HeroSection} />
      <Route path="/form" component={Summary} />
    </Switch>
  </main>
);

export default Main;

// <Route path="/roster" component={Roster} />
