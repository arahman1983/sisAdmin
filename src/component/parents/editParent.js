import React from "react";
import NotesHeader from "../PageHeader";
import { ParentForm } from "./parentForm";
import { connect } from "react-redux";
import { editParent, removeParent } from "../../actions/parents";

const EditParent = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section="Parents" />
      <ParentForm
        parent={props.parent}
        onSubmit={parent => {
          props.dispatch(editParent(props.parent.id, parent));
          props.history.push("/parents");
        }}
      />
      <div className="row text-center my-3">
        <button
          className="btn btn-warning mx-auto"
          onClick={() => {
            const id = props.parent.id;
            props.dispatch(removeParent({ id }));
            props.history.push("/parents");
          }}
        >
          Remove Parent's Data
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    parent: state.parents.find(parent => parent.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditParent);
