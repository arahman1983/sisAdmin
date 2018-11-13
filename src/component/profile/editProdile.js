import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import ProfileForm from "./profileForm";

const EditProfile = props => {
  return (
    <div className="col-md-9">
      <NotesHeader section={props.profile.enName} />
      <ProfileForm data={props.profile} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};
export default connect(mapStateToProps)(EditProfile);
