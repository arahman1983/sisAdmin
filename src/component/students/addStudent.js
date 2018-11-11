import React from "react";
import NotesHeader from "../PageHeader";
import { StudentForm } from "./studentForm";
import { connect } from "react-redux";
import { addStudent } from "../../actions/students";

const AddStudent = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section="Students" />
      <StudentForm
        student={props.student}
        onSubmit={student => {
          props.dispatch(addStudent(student));
          props.history.push("/students");
        }}
      />
    </div>
  );
};

export default connect()(AddStudent);
