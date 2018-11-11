import React from "react";
import NotesHeader from "../PageHeader";
import { TeacherForm } from "./teacherForm";
import { connect } from "react-redux";
import { editTeacher, removeTeacher } from "../../actions/teachers";

const EditTeacher = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section="Teachers" />
      <TeacherForm
        teacher={props.teacher}
        onSubmit={teacher => {
          props.dispatch(editTeacher(props.teacher.id, teacher));
          props.history.push("/teachers");
        }}
      />
      <div className="row text-center my-3">
        <button
          className="btn btn-warning mx-auto"
          onClick={() => {
            const id = props.teacher.id;
            props.dispatch(removeTeacher({ id }));
            props.history.push("/teachers");
          }}
        >
          Remove Teacher's Data
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    teacher: state.teachers.find(
      teacher => teacher.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditTeacher);
