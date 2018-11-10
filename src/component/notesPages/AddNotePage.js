import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import { NoteForm } from "./sendNoteForm";
import { addNote } from "../../actions/notes";
//import moment from "moment";

const AddNotePage = props => {
  const email = props.match.params;
  console.log(email);
  return (
    <div className="col-md-9">
      <NotesHeader section="Notes" />
      <h3 className="my-3">Add Note</h3>
      <div className="container-fluid">
        <NoteForm
          From={email.from}
          onSubmit={note => {
            props.dispatch(addNote(note));
            props.history.push("/notes");
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    noteToView: state.notes,
    student: state.students
  };
};

export default connect(mapStateToProps)(AddNotePage);
