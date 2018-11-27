import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import ScadualForm from "./ScadualForm";
import { editScItem, removeScItem } from "../../actions/scadual";

const EditEvent = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section="School Scadual" />
      <ScadualForm
        event={props.event}
        onSubmit={event => {
          props.dispatch(editScItem(props.event.id, event));
          props.history.push("/schedule");
        }}
      />
      <hr />
      <div className="container">
        <button
          onClick={event => {
            const id = props.event.id;
            props.dispatch(removeScItem({ id }));
            props.history.push("/schedule");
          }}
          className="btn btn-warning"
        >
          Remove Event
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    event: state.events.find(event => event.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditEvent);
