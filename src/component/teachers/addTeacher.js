import React from "react";
import NotesHeader from "../PageHeader";
import { TeacherForm } from "./teacherForm";
import { connect } from "react-redux";
import { addTeacher } from "../../actions/teachers";

const AddTeacher = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section="Teachers" />
      <TeacherForm
        teacher={props.teacher}
        onSubmit={teacher => {
          props.dispatch(addTeacher(teacher));
          props.history.push("/teachers");
        }}
      />
    </div>
  );
};

export default connect()(AddTeacher);
