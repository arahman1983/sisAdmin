import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ParentData = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section="Parents" />
      <div className="row my-3">
        <div className="col-md-9">
          <h4> Name : {props.parent.enName}</h4>
          <h4 className="text-right"> الاسم : {props.parent.arName}</h4>
          <h5>Specialization : {props.parent.specialize}</h5>
          <h5>Grade : {props.parent.grade}</h5>
        </div>
        <div className="col-md-3">
          <img
            src={`/img/${props.parent.pic}`}
            className="rounded-circle img-thumbnail my-3 profileImge"
            alt="Name"
          />
        </div>
        <div className="col-md-12">
          <p>
            <b>Email :</b>{" "}
            <a href="mailto:{props.parent.email}">{props.parent.email}</a>{" "}
            <br />
            <b>Phone :</b>{" "}
            <a href="tel:{props.parent.phone}">{props.parent.phone}</a> <br />
            <b>UserName :</b> {props.parent.username}
            <br />
            <br />
          </p>

          <h4>Other : </h4>
          <p>{props.parent.hoppiesActivities}</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <Link
            to={`/editParent/${props.parent.id}`}
            className="btn btn-primary btn-block"
          >
            Edit
          </Link>
        </div>
        <div className="col-sm-3">
          <Link
            to={`/addnote/${props.parent.email}`}
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
    parent: state.parents.find(parent => parent.id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(ParentData);
