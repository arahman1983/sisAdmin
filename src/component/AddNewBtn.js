import React from "react";
import { NavLink } from "react-router-dom";

const SendNoteBtn = props => (
  <div className="row p-2">
    <NavLink to={props.link} className="btn btn-success">
      <h4> + {props.section}</h4>
    </NavLink>
  </div>
);

export default SendNoteBtn;
