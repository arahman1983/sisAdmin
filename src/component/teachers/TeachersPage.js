import React from "react";
import NotesHeader from "../PageHeader";
import TeachersRow from "./teachersRow";
import { connect } from "react-redux";
import SendNoteBtn from "../AddNewBtn";
import TotalItems from "../total";
import { getVisibleData } from "../../selectors/arrangeByDate";

const TeachersPage = props => (
  <div className="col-md-9">
    <NotesHeader section="Teachers" />
    <SendNoteBtn link="/addTeacher" section="Add Teacher" />
    <TotalItems
      itemName={props.teachers.length === 1 ? "Teacher" : "Teachers"}
      dataarray={props.teachers.length}
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
        {props.teachers.map(teacher => {
          return <TeachersRow key={teacher.id} {...teacher} />;
        })}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({
  teachers: getVisibleData(state.teachers, state.filters)
});

export default connect(mapStateToProps)(TeachersPage);
