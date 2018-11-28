import React from "react";
import NotesHeader from "../PageHeader";
import NotesRow from "./notesRow";
import { connect } from "react-redux";
import SendNoteBtn from "../AddNewBtn";
import TotalItems from "../total";
import { getVisibleData } from "../../selectors/arrangeByDate";
import { Link } from "react-router-dom";

export const SentNotesPage = props => (
  <div className="col-md-9">
    <NotesHeader section="Notes" />
    <SendNoteBtn link="/addnote" section="Send a Note" />
    <div className="container-fluid my-3">
      <Link className="btn btn-info text-white" to="/notes">
        Inbox
      </Link>
    </div>
    <TotalItems
      itemName={props.notes.length === 1 ? "Note" : "notes"}
      dataarray={props.notes.length}
    />
    <table className="table table-striped text-center">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Sent At</th>
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

const mapStateToProps = state => {
  const notes = state.notes.filter(notes => notes.To !== state.profile.email);
  return {
    notes: getVisibleData(notes, state.filters)
  };
};

export default connect(mapStateToProps)(SentNotesPage);
