import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const StudentData = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section="Students" />
      <div className="row my-3">
        <div className="col-md-9">
          <h4> Name : {props.student.enName}</h4>
          <h4 className="text-right"> الاسم : {props.student.arName}</h4>
          <h5>Grade : {props.student.grade}</h5>
        </div>
        <div className="col-md-3">
          <img
            src={`/img/${props.student.pic}`}
            className="rounded-circle img-thumbnail my-3 profileImge"
            alt="Name"
          />
        </div>
        <div className="col-md-12">
          <p>
            <b>Email :</b>{" "}
            <a href="mailto:{props.student.email}">{props.student.email}</a>{" "}
            <br />
            <b>Phone :</b>{" "}
            <a href="tel:{props.student.phone}">{props.student.phone}</a> <br />
            <b>UserName :</b> {props.student.username}
            <br />
            <br />
          </p>

          <h4>Hobbies And Activities</h4>
          <p>{props.student.hoppiesActivities}</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <Link
            to={`/editStudent/${props.student.id}`}
            className="btn btn-primary btn-block"
          >
            Edit
          </Link>
        </div>
        <div className="col-sm-3">
          <Link
            to={`/addnote/${props.student.email}`}
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
    student: state.students.find(
      student => student.id === props.match.params.id
    )
  };
};
export default connect(mapStateToProps)(StudentData);
