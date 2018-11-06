import React from "react";

const ProfileCard = () => (
  <div className="row">
    <div className="col-md-8 mx-auto text-center">
      <img
        src="/img/profile.png"
        className="rounded-circle img-thumbnail my-3 profileImge"
        alt="Name"
      />
    </div>
    <h4 className="text-center w-100">Full Name of Profile</h4>
    <p className="text-center w-100">Title, position, job</p>
  </div>
);

export default ProfileCard;
