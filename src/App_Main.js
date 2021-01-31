import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import aboutUs from "./pages/about/aboutUs";

function App_Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={aboutUs} />
      </Switch>
    </Router>
  );
}

export default App_Main;
