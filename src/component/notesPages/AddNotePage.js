import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import { NoteForm } from "./sendNoteForm";
import { addNote } from "../../actions/notes";
//import moment from "moment";

const AddNotePage = props => {
  const email = props.match.params;
  return (
    <div className="col-md-9">
      <NotesHeader section="Notes" />
      <h3 className="my-3">Add Note</h3>
      <div className="container-fluid">
        <NoteForm
          From={email.from}
          student={props.student}
          teacher={props.teacher}
          parent={props.parent}
          profile={props.profile}
          onSubmit={note => {
            props.dispatch(addNote(note));
            props.history.push("/notes");
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    noteToView: state.notes,
    student: state.students,
    teacher: state.teachers,
    parent: state.parents,
    profile: state.profile
  };
};

export default connect(mapStateToProps)(AddNotePage);
