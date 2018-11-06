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
import AddNotePage from "./component/notesPages/AddNotePage";
import ViewNotePage from "./component/notesPages/ViewNotePage";

const App = () => (
  <BrowserRouter>
    <div className="container-fluid h-100">
      <div className="row h-100">
        <LeftBarMenu />
        <Switch>
          <Route path="/" component={WelcomePage} exact={true} />
          <Route path="/students" component={StudentsPage} />
          <Route path="/teachers" component={TeachersPage} />
          <Route path="/parents" component={ParentsPage} />
          <Route path="/notes" component={NotesPage} />
          <Route path="/schedule" component={SchoolScadualPage} />
          <Route path="/addnote" component={AddNotePage} />
          <Route path="/addnote/:from" component={AddNotePage} />
          <Route path="/note/:id" component={ViewNotePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
