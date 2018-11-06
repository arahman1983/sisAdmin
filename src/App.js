import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./component/NotFoundPage";
import LeftBarMenu from "./component/LeftBarMenu";
import WelcomePage from "./component/WelcomePage";
import StudentsPage from "./component/StudentsPage";
import TeachersPage from "./component/TeachersPage";
import ParentsPage from "./component/ParentsPage";
import NotesPage from "./component/NotesPage";
import SchoolScadualPage from "./component/SchoolScadualPage";

const App = () => (
  <BrowserRouter>
    <div className="container-fluid">
      <div className="row">
        <LeftBarMenu />
        <Switch>
          <Route path="/" component={WelcomePage} exact={true} />
          <Route path="/students" component={StudentsPage} />
          <Route path="/teachers" component={TeachersPage} />
          <Route path="/parents" component={ParentsPage} />
          <Route path="/notes" component={NotesPage} />
          <Route path="/schedule" component={SchoolScadualPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
