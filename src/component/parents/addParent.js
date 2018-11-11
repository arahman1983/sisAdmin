import React from "react";
import NotesHeader from "../PageHeader";
import { ParentForm } from "./parentForm";
import { connect } from "react-redux";
import { addParent } from "../../actions/parents";

const AddParent = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section="Paents" />
      <ParentForm
        parent={props.parent}
        onSubmit={parent => {
          props.dispatch(addParent(parent));
          props.history.push("/parents");
        }}
      />
    </div>
  );
};

export default connect()(AddParent);
