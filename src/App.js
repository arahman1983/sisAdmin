import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./component/NotFoundPage";
import LeftBarMenu from "./component/LeftBarMenu";
import WelcomePage from "./component/WelcomePage";
import StudentsPage from "./component/students/StudentsPage";
import TeachersPage from "./component/teachers/TeachersPage";
import ParentsPage from "./component/parents/ParentsPage";
import NotesPage from "./component/notesPages/NotesPage";
import SchoolScadualPage from "./component/scadual/SchoolScadualPage";
import AddNotePage from "./component/notesPages/AddNotePage";
import ViewNotePage from "./component/notesPages/ViewNotePage";

const App = () => (
  <BrowserRouter>
    <div className="container-fluid h-100">
      <div className="row h-100">
        <LeftBarMenu />
        <Switch>
          <Route path="/" component={WelcomePage} exact={true} />
          <Route path="/profile" component={WelcomePage} />
          <Route path="/editprofile" component={WelcomePage} />
          <Route path="/students" component={StudentsPage} />
          <Route path="/addStudent" component={StudentsPage} />
          <Route path="/editStudent/:id" component={StudentsPage} />
          <Route path="/teachers" component={TeachersPage} />
          <Route path="/addTeacher" component={TeachersPage} />
          <Route path="/editTeacher/:id" component={TeachersPage} />
          <Route path="/parents" component={ParentsPage} />
          <Route path="/addparent" component={ParentsPage} />
          <Route path="/editparent/:id" component={ParentsPage} />
          <Route path="/notes" component={NotesPage} />
          <Route path="/schedule" component={SchoolScadualPage} />
          <Route path="/additem" component={SchoolScadualPage} />
          <Route path="/edititem/:id" component={SchoolScadualPage} />
          <Route path="/addnote" component={AddNotePage} exact={true} />
          <Route path="/addnote/:from" component={AddNotePage} />
          <Route path="/note/:id" component={ViewNotePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
