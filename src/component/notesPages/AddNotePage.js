import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
//import moment from "moment";

export const AddNotePage = props => (
  <div className="col-md-9">
    <NotesHeader section="Notes" />
    <h3 className="my-3">Add Note</h3>
    <div className="container-fluid">
      <form>
        <div className="form-group">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Title of the Note"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="send to .... (auto complete) "
            //value={props.noteToView.From ? props.noteToView.From : ""}
            //onChange={}
          />
        </div>
        <div className="form-group">
          <textarea
            name="details"
            className="form-control"
            placeholder="details"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success">Send the Note</button>
        </div>
      </form>
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  console.log(props.match.params.from);
  if (props.match.params.from) {
    return {
      noteToView: state.notes.find(
        noteToView => noteToView.from === props.match.params.from
      )
    };
  } else {
    return {
      noteToView: state.notes
    };
  }
};

export default connect(mapStateToProps)(AddNotePage);
