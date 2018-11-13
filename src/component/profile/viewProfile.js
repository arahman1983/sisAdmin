import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ViewProfile = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section={props.profile.enName} />
      <div className="row my-3">
        <div className="col-md-8">
          <h5>
            <b className="text-info">English Name :</b> {props.profile.enName}
          </h5>
          <h5>
            <b className="text-info">Arabic Name :</b> {props.profile.arName}
          </h5>
          <br />
          <h6>
            <b className="text-info">Job Title :</b> {props.profile.jobTitle}
          </h6>
          <hr />
          <h6>
            <b className="text-info">Email :</b> {props.profile.email}
          </h6>
          <h6>
            <b className="text-info">Phone :</b> {props.profile.phone}
          </h6>
          <hr />
          <h6>
            <b className="text-info">User Name :</b> {props.profile.username}
          </h6>
          <h6>
            <b className="text-info">Password :</b> •••••
          </h6>
          <hr />
          <Link className="btn btn-default bg-light" to="/editProfile">
            Edit Profile
          </Link>
        </div>
        <div className="col-md-4 p-5">
          <img
            src={`/img/${props.profile.pic}`}
            className="img-thumbnail"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    profile: state.profile
  };
};
export default connect(mapStateToProps)(ViewProfile);
