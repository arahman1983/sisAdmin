import React from "react";
import SendNoteBtn from "./AddNewBtn";
const NotesHeader = props => (
  <div>
    <div className="row page-headers h-100 p-2">
      <h5>{props.section}</h5>
    </div>
    <SendNoteBtn section={`Add ${props.section}`} />
  </div>
);

export default NotesHeader;
