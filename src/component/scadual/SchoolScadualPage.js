import React from "react";
import NotesHeader from "../PageHeader";
import SendNoteBtn from "../AddNewBtn";

const SchoolScadualPage = () => (
  <div className="col-md-9">
  <NotesHeader section="School Scadual" />
  <SendNoteBtn link="/additem" section="Add New Item" />
    <p>School Scadual Page</p>
  </div>
);

export default SchoolScadualPage;