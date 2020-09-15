import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/index.scss";
import Meter from "./components/meter";
import MeterDetails from "./components/meter/meterDetails";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/meter/add" component={MeterDetails} />
        <Route path="/meter" component={Meter} />
        <Route path="/" component={Meter} />
      </Switch>
    </div>
  );
}

export default App;
