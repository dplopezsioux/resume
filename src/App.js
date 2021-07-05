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

//css
import "bootstrap/dist/css/bootstrap.min.css";

//start
const App = () => {
  return (
    <div>
      <Shoes />

      <Resume />

      <Builtit />

      <SolarS />

      <Configurationforthis />

      <Education />

      <Skill />

      <ContactForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
