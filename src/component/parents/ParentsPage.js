import React from "react";
import NotesHeader from "../PageHeader";
import SendNoteBtn from "../AddNewBtn";

const ParentsPage = () => (
  <div className="col-md-9">
  <NotesHeader section="Parents" />
      <SendNoteBtn section="Add Parent Data" />
    <p>Parents Page</p>
  </div>
);

export default ParentsPage;
