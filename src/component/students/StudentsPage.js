import React from "react";
import NotesHeader from "../PageHeader";
import SendNoteBtn from "../AddNewBtn";

const StudentsPage = () => (
  <div className="col-md-9">
  <NotesHeader section="Students" />
  <SendNoteBtn link="/addStudent" section="Add Student" />
    <p>Students Page</p>
  </div>
);

export default StudentsPage;
