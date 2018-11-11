import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const TeacherData = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section="Students" />
      <div className="row my-3">
        <div className="col-md-9">
          <h4> Name : {props.teacher.enName}</h4>
          <h4 className="text-right"> الاسم : {props.teacher.arName}</h4>
          <h5>Specialization : {props.teacher.specialize}</h5>
          <h5>Grade : {props.teacher.grade}</h5>
        </div>
        <div className="col-md-3">
          <img
            src={`/img/${props.teacher.pic}`}
            className="rounded-circle img-thumbnail my-3 profileImge"
            alt="Name"
          />
        </div>
        <div className="col-md-12">
          <p>
            <b>Email :</b>{" "}
            <a href="mailto:{props.teacher.email}">{props.teacher.email}</a>{" "}
            <br />
            <b>Phone :</b>{" "}
            <a href="tel:{props.teacher.phone}">{props.teacher.phone}</a> <br />
            <b>UserName :</b> {props.teacher.username}
            <br />
            <br />
          </p>

          <h4>Other : </h4>
          <p>{props.teacher.hoppiesActivities}</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <Link
            to={`/editTeacher/${props.teacher.id}`}
            className="btn btn-primary btn-block"
          >
            Edit
          </Link>
        </div>
        <div className="col-sm-3">
          <Link
            to={`/addnote/${props.teacher.email}`}
            className="btn btn-success btn-block"
          >
            Send Note
          </Link>
        </div>
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
export default connect(mapStateToProps)(TeacherData);
