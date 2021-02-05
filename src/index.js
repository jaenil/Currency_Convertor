import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
