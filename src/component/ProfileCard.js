import React from "react";
import {Link} from "react-router-dom";

const ProfileCard = () => (
  <div className="row">
    <div className="col-md-8 mx-auto text-center">
      <img
        src="/img/profile.png"
        className="rounded-circle img-thumbnail my-3 profileImge"
        alt="Name"
      />
    </div>
    <Link className="text-center w-100" to="/profile"><h4>Full Name of Profile</h4></Link>
    <p className="text-center w-100">Title, position, job</p>
  </div>
);

export default ProfileCard;
