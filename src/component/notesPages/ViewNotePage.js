import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import SendNoteBtn from "../AddNewBtn";
import {removeNote} from "../../actions/notes"
export const ViewNotePage = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section="Notes" />
      <SendNoteBtn section="Add a Note" />
      <div className="container-fluid">
        <div className="row bg-light">
          <div className="col-6">
            <h4 className="p-2 w-100">{props.noteToView.title}</h4>
          </div>
          <div className="col-4">
            <p className="py-2 w-100">{`Sent From " ${props.noteToView.From} " to  " ${
              props.noteToView.To
            } "`}</p>
          </div>
          <div className="col-2">
            <p className="py-2 w-100">
              {moment(props.noteToView.sentAt).format("MMM Do YYYY")}
            </p>
          </div>
        </div>
        <p className="p-2">{props.noteToView.details}</p>
      </div>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-6">
            <Link
              className="btn btn-primary"
              to={`/addnote/${props.noteToView.From}`}
            >
              <h5>Replay</h5>
            </Link>
          </div>
          <div className="col-md-6">
            <button onClick={()=>{
              const id = props.noteToView.id
              props.dispatch(removeNote({id}));
              props.history.push("/notes"); 
            }} className="btn btn-warning">
              <h5>Delete</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    noteToView: state.notes.find(
      noteToView => noteToView.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(ViewNotePage);
