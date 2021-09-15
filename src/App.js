/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";

//component
import Resume from "./component/Resume";
import Configurationforthis from "./component/Configurationforthis";
import Skill from "./component/Skill";
import Education from "./component/Education";
import Builtit from "./component/Builtit";
import ContactForm from "./component/ContactForm";
import SolarS from "./component/SolarS";
import Shoes from "./component/Shoes";
import Menu from "./component/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//css
import "bootstrap/dist/css/bootstrap.min.css";

//start
const App = () => {
  return (
    <div>
      <Router>
        <Menu />
        <Resume />
        <div>
          <Switch>
            <Route exact path="/">
              <Builtit />
              <Configurationforthis />
            </Route>
            <Route path="/about">
              <Education />
              <Skill />
            </Route>
            <Route path="/examples">
              <Shoes />
              <SolarS />
            </Route>
          </Switch>
        </div>
      </Router>
      <ContactForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
