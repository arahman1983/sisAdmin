import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import ScadualForm from "./ScadualForm";
import { addScItem } from "../../actions/scadual";

const ScadualItemAdd = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section="School Scadual" />
      <ScadualForm
        event={props.event}
        onSubmit={event => {
          props.dispatch(addScItem(event));
          props.history.push("/schedule");
        }}
      />
    </div>
  );
};

export default connect()(ScadualItemAdd);
