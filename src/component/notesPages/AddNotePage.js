import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import {NoteForm} from "./sendNoteForm";
import {addNote} from "../../actions/notes"
//import moment from "moment";

const AddNotePage =(props)=>{
  return(
  <div className="col-md-9">
    <NotesHeader section="Notes" />
    <h3 className="my-3">Add Note</h3>
    <div className="container-fluid">
    <NoteForm
        From = {props.noteToView.From}
        onSubmit={note => {
        props.dispatch(addNote(note));
        props.history.push("/notes");
      }} />
    </div>
  </div>
)};

const mapStateToProps = (state, props) => {
  if(!!props.match.params.from){
    return {
      noteToView: state.notes.find(
        noteToView => noteToView.From === props.match.params.from
      )
    };
  }else{
    return {
      noteToView: state.notes
    };
  }  
};

export default connect(mapStateToProps)(AddNotePage);