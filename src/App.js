import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./component/NotFoundPage";
import LeftBarMenu from "./component/LeftBarMenu";
import WelcomePage from "./component/WelcomePage";
import NotesPage from "./component/notesPages/NotesPage";
import SchoolScadualPage from "./component/scadual/SchoolScadualPage";

import AddNotePage from "./component/notesPages/AddNotePage";
import ViewNotePage from "./component/notesPages/ViewNotePage";
import SentNotesPage from "./component/notesPages/sentNotes";

import StudentsPage from "./component/students/StudentsPage";
import StudentData from "./component/students/studentData";
import EditStudent from "./component/students/editStudent";
import AddStudent from "./component/students/addStudent";

import TeachersPage from "./component/teachers/teachersPage";
import TeacherData from "./component/teachers/teacherData";
import EditTeacher from "./component/teachers/editTeacher";
import AddTeacher from "./component/teachers/addTeacher";

import ParentsPage from "./component/parents/ParentsPage";
import ParentData from "./component/parents/parentData";
import EditParent from "./component/parents/editParent";
import AddParent from "./component/parents/addParent";

import ViewProfile from "./component/profile/viewProfile";
import EditProfile from "./component/profile/editProdile";

import ScadualItemAdd from "./component/scadual/scadualItemAdd";
import EditEvent from "./component/scadual/scadualItemEdit";

const App = () => (
  <BrowserRouter>
    <div className="container-fluid h-100">
      <div className="row h-100">
        <LeftBarMenu />
        <Switch>
          <Route path="/" component={WelcomePage} exact={true} />
          <Route path="/profile" component={ViewProfile} />
          <Route path="/editprofile" component={EditProfile} />

          <Route path="/students" component={StudentsPage} />
          <Route path="/addStudent" component={AddStudent} />
          <Route path="/studentData/:id" component={StudentData} />
          <Route path="/editStudent/:id" component={EditStudent} />

          <Route path="/teachers" component={TeachersPage} />
          <Route path="/addTeacher" component={AddTeacher} />
          <Route path="/teacherData/:id" component={TeacherData} />
          <Route path="/editTeacher/:id" component={EditTeacher} />

          <Route path="/parents" component={ParentsPage} />
          <Route path="/addParent" component={AddParent} />
          <Route path="/ParentData/:id" component={ParentData} />
          <Route path="/editParent/:id" component={EditParent} />

          <Route path="/sentNotes" component={SentNotesPage} />
          <Route path="/notes" component={NotesPage} />
          <Route path="/schedule" component={SchoolScadualPage} />
          <Route path="/additem" component={ScadualItemAdd} />
          <Route path="/editEvent/:id" component={EditEvent} />
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
