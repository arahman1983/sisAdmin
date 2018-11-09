import React from "react";
import NotesHeader from "../PageHeader";
import SendNoteBtn from "../AddNewBtn";

const TeachersPage = () => (
<div className="col-md-9">
<NotesHeader section="Teachers" />
  <SendNoteBtn link="/addTeacher" section="Add Teacher" />
    <p>Teachers Page</p>
  </div>
);

export default TeachersPage;
