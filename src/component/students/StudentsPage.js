import React from "react";
import NotesHeader from "../PageHeader";
import StudentsRow from "./studentsRow.js";
import { connect } from "react-redux";
import SendNoteBtn from "../AddNewBtn";
import TotalItems from "../total";
import { getVisibleData } from "../../selectors/arrangeByDate";

const StudentsPage = props => (
  <div className="col-md-9">
    <NotesHeader section="Students" />
    <SendNoteBtn link="/addStudent" section="Add Student" />
    <TotalItems
      itemName={props.students.length === 1 ? "Student" : "Students"}
      dataarray={props.students.length}
    />
    <table className="table table-striped text-center">
      <thead>
        <tr>
          <th scope="col">English Name</th>
          <th scope="col">Arabic Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        {props.students.map(student => {
          return <StudentsRow key={student.id} {...student} />;
        })}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({
  students: getVisibleData(state.students, state.filters)
});

export default connect(mapStateToProps)(StudentsPage);
