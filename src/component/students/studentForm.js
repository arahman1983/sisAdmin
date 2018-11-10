import React from "react";
import uuid from "uuid";

export class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.student ? props.student.id : uuid(),
      enName: props.student ? props.student.enName : "",
      arName: props.student ? props.student.arName : "",
      grade: props.student ? props.student.grade : "",
      email: props.student ? props.student.email : "",
      phone: props.student ? props.student.phone : "",
      username: props.student ? props.student.username : "",
      password: props.student ? props.student.password : "",
      hoppiesActivities: props.student ? props.student.hoppiesActivities : "",
      pic: props.student ? props.student.pic : "",
      btnLable: props.student ? "Edit Student Data" : "Add Student Data",
      error: ""
    };
  }
  enNameChange = e => {
    const enName = e.target.value;
    this.setState(() => ({
      enName
    }));
  };
  arNameChange = e => {
    const arName = e.target.value;
    this.setState(() => ({
      arName
    }));
  };
  gradeChange = e => {
    const grade = e.target.value;
    this.setState(() => ({
      grade
    }));
  };
  emailChange = e => {
    const email = e.target.value;
    this.setState(() => ({
      email
    }));
  };
  phoneChange = e => {
    const phone = e.target.value;
    this.setState(() => ({
      phone
    }));
  };
  userChange = e => {
    const username = e.target.value;
    this.setState(() => ({
      username
    }));
  };
  passChange = e => {
    const password = e.target.value;
    this.setState(() => ({
      password
    }));
  };
  activChange = e => {
    const hoppiesActivities = e.target.value;
    this.setState(() => ({
      hoppiesActivities
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    var d = new Date();
    if (!this.state.username) {
      this.setState(() => ({
        error: "You should add details and email to send at least"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        id: this.state.id,
        enName: this.state.enName,
        arName: this.state.arName,
        grade: this.state.grade,
        email: this.state.email,
        phone: this.state.phone,
        username: this.state.username,
        password: this.state.password,
        hoppiesActivities: this.state.hoppiesActivities,
        pic: this.state.pic,
        sentAt: d.getTime()
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="my-3">
        <div className="form-group">
          <span>English Name: </span>
          <input
            name="enName"
            type="text"
            className="form-control"
            placeholder="English Name"
            value={this.state.enName}
            onChange={this.enNameChange}
          />
        </div>
        <div className="form-group">
          <span>Arabic Name: </span>
          <input
            name="arName"
            type="text"
            className="form-control"
            placeholder="Arabic Name"
            value={this.state.arName}
            onChange={this.arNameChange}
          />
        </div>
        <div className="form-group">
          <span>Grade: </span>
          <input
            name="grade"
            type="text"
            className="form-control"
            placeholder="Grade"
            value={this.state.grade}
            onChange={this.gradeChange}
          />
        </div>
        <div className="form-group">
          <span>E-mail: </span>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Example@domain.ext"
            value={this.state.email}
            onChange={this.emailChange}
          />
        </div>
        <div className="form-group">
          <span>Phone: </span>
          <input
            name="phone"
            type="text"
            className="form-control"
            placeholder="phone number"
            value={this.state.phone}
            onChange={this.phoneChange}
          />
        </div>
        <div className="form-group">
          <span>Username: </span>
          <input
            name="usename"
            type="text"
            className="form-control"
            placeholder="userName"
            value={this.state.username}
            onChange={this.userChange}
          />
        </div>
        <div className="form-group">
          <span>Password: </span>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="password"
            value={this.state.password}
            onChange={this.passChange}
          />
        </div>
        <div className="form-group">
          <span>Hobbies And Activities : </span>
          <textarea
            name="activities"
            className="form-control"
            placeholder="Hobbies And Activities"
            value={this.state.hoppiesActivities}
            onChange={this.activChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">{this.state.btnLable}</button>
        </div>
      </form>
    );
  }
}
