import * as React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import indexRoutes from "./routes/index.jsx";
import "./assets/scss/material-dashboard-pro-react.css?v=1.4.0";

const browserhistory = createBrowserHistory();

const App = () =>
  <Router  history={browserhistory}>
    <div>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </div>
  </Router>;

export default App;
