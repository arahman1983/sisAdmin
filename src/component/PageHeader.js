import React from "react";

const NotesHeader = props => (
  <div>
    <div className="row page-headers h-100 p-2">
      <h5>{props.section}</h5>
    </div>
  </div>
);

export default NotesHeader;
