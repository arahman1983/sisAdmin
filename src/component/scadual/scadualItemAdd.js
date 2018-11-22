import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import ScadualForm from "./ScadualForm";

const ScadualItemAdd = () => {
  return (
    <div className="col-md-9">
      <NotesHeader section="School Scadual" />
      <ScadualForm />
    </div>
  );
};

export default connect()(ScadualItemAdd);
