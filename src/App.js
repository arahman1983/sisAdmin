import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./component/NotFoundPage";
import LeftBarMenu from "./component/LeftBarMenu";
import WelcomePage from "./component/WelcomePage";

const App = () => (
  <BrowserRouter>
    <div className="container-fluid">
      <div className="row">
        <LeftBarMenu />
        <Switch>
          <Route path="/" component={WelcomePage} exact={true} />
          <Route path="/" component={WelcomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
