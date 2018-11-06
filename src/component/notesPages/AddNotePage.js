import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const AddNotePage = () => (
  <div className="col-md-9">
    <NotesHeader section="Notes" />
    <p>Add Notes Page</p>
  </div>
);

export default AddNotePage;
