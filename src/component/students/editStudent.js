import React from "react";
import NotesHeader from "../PageHeader";
import { StudentForm } from "./studentForm";
import { connect } from "react-redux";
import { editStudent } from "../../actions/students";

const EditStudent = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section="Students" />
      <StudentForm
        student={props.student}
        onSubmit={student => {
          props.dispatch(editStudent(student));
          props.history.push("/students");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    student: state.students.find(
      student => student.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditStudent);
