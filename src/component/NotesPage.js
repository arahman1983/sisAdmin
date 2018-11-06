import React from "react";
import NotesHeader from "./PageHeader";
import NotesRow from "./notesPages/notesRow";
import { connect } from "react-redux";
import SendNoteBtn from "./AddNewBtn";

export const NotesPage = props => (
  <div className="col-md-9">
    <NotesHeader section="Notes" />
    <SendNoteBtn section="Add a Note" />
    <table className="table table-striped text-center">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Sent At</th>
          <th scope="col"> </th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        {props.notes.map(note => {
          return <NotesRow key={note.id} {...note} />;
        })}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(NotesPage);
