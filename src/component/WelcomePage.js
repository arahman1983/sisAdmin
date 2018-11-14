import React from "react";
import NotesHeader from "./PageHeader";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TotalItems from "./total";
import NotesRow from "./notesPages/notesRow";

const WelcomePage = props => {
  console.log(props.unReadNotes);
  return (
    <div className="col-md-9">
      <NotesHeader section="Welcome to your Dashboard" />
      <div className="container py-3">
        <div className="row">
          <div className="col-3">
            <div className="bg-danger text-center text-white py-3 card">
              <Link to="/notes">
                <h1> {props.allnotes.length}</h1>
                <h6>{props.allnotes.length === 1 ? "Note" : "Notes"}</h6>
              </Link>
            </div>
          </div>
          <div className="col-3">
            <div className="bg-primary text-center text-white py-3 card">
              <Link to="/students">
                <h1> {props.students.length}</h1>
                <h6>{props.students.length === 1 ? "Student" : "Students"}</h6>
              </Link>
            </div>
          </div>
          <div className="col-3">
            <div className="bg-success text-center text-white py-3 card">
              <Link to="/teachers">
                <h1> {props.teachers.length}</h1>
                <h6>{props.teachers.length === 1 ? "Teacher" : "Teachers"}</h6>
              </Link>
            </div>
          </div>
          <div className="col-3">
            <div className="bg-warning text-center text-white py-3 card">
              <Link to="/parents">
                <h1> {props.parents.length}</h1>
                <h6>{props.parents.length === 1 ? "Parent" : "Parents"}</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <TotalItems
          itemName={
            props.unReadNotes.length === 1 ? "Unreaded Note" : "unreaded notes"
          }
          dataarray={props.unReadNotes.length}
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
            {props.unReadNotes.map(note => {
              return <NotesRow key={note.id} {...note} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  teachers: state.teachers,
  students: state.students,
  parents: state.parents,
  allnotes: state.notes,
  unReadNotes: state.notes.filter(unReadNotes => unReadNotes.readen === false)
});

export default connect(mapStateToProps)(WelcomePage);
