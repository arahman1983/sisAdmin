import React from "react";
import uuid from "uuid";
import axios from "axios";

export class ParentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.parent ? props.parent.id : uuid(),
      enName: props.parent ? props.parent.enName : "",
      arName: props.parent ? props.parent.arName : "",
      students: props.parent ? props.parent.students : "",
      email: props.parent ? props.parent.email : "",
      phone: props.parent ? props.parent.phone : "",
      username: props.parent ? props.parent.username : "",
      password: props.parent ? props.parent.password : "",
      hoppiesActivities: props.parent ? props.parent.hoppiesActivities : "",
      pic: props.parent ? props.parent.pic : "",
      btnLable: props.parent ? "Edit Parent Data" : "Add Parent Data",
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

  specializeChange = e => {
    const students = e.target.value;
    this.setState(() => ({
      students
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.username) {
      this.setState(() => ({
        error: "You should add username and email to send at least"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        id: this.state.id,
        enName: this.state.enName,
        arName: this.state.arName,
        students: this.state.students,
        email: this.state.email,
        phone: this.state.phone,
        username: this.state.username,
        password: this.state.password,
        hoppiesActivities: this.state.hoppiesActivities,
        pic: this.state.pic,
        sentAt: new Date().getTime()
      });
    }
  };

  fileChangedHandler = event => {
    this.setState({ pic: event.target.files[0].name });
    const formData = new FormData();
    formData.append("myFile", this.state.pic, this.state.pic.name);
    axios.post("/img", formData, {
      onUploadProgress: progressEvent => {
        console.log(progressEvent.loaded / progressEvent.total);
      }
    });
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
          <span>Students : </span>
          <input
            name="specialize"
            type="text"
            className="form-control"
            placeholder="Students"
            value={this.state.students}
            onChange={this.specializeChange}
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
          <span>Others : </span>
          <textarea
            name="activities"
            className="form-control"
            placeholder="Hobbies And Activities"
            value={this.state.hoppiesActivities}
            onChange={this.activChange}
          />
        </div>

        {this.state.pic ? (
          <div className="form-group uploadDiv">
            <span>Picture: </span>
            <img
              src={`/img/${this.state.pic}`}
              className="rounded-circle img-thumbnail my-3 profileImge"
              alt="Name"
            />
            <br />
            <input
              className="inputFile"
              type="file"
              name="file"
              id="file"
              onChange={this.fileChangedHandler}
            />
            <br />
            <label htmlFor="file">Choose a file</label>
          </div>
        ) : (
          <div className="form-group uploadDiv">
            <span>Picture: </span>
            <input
              className="inputFile"
              type="file"
              name="file"
              id="file"
              onChange={this.fileChangedHandler}
            />
            <br />
            <label htmlFor="file">Choose a file</label>
          </div>
        )}

        <div className="form-group">
          <button className="btn btn-primary">{this.state.btnLable}</button>
        </div>
      </form>
    );
  }
}
