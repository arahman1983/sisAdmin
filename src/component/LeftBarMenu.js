import React from "react";
import { NavLink } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const LeftBarMenu = () => (
  <div className="col-md-3 bg-light h-100">
    <ProfileCard />
    <div className="list-group">
      <NavLink
        className="list-group-item"
        activeClassName="navlinkActive"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="list-group-item"
        activeClassName="navlinkActive"
        to="/students"
      >
        Students
      </NavLink>
      <NavLink
        className="list-group-item"
        activeClassName="navlinkActive"
        to="/teachers"
      >
        Teachers
      </NavLink>
      <NavLink
        className="list-group-item"
        activeClassName="navlinkActive"
        to="/parents"
      >
        Parents
      </NavLink>
      <NavLink
        className="list-group-item"
        activeClassName="navlinkActive"
        to="/notes"
      >
        Notes
      </NavLink>
      <NavLink
        className="list-group-item"
        activeClassName="navlinkActive"
        to="/schedule"
      >
        school schedule
      </NavLink>
    </div>
    <br />
  </div>
);

export default LeftBarMenu;
