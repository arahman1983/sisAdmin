import React from "react";
import uuid from "uuid";
import axios from "axios";

export class TeacherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.teacher ? props.teacher.id : uuid(),
      enName: props.teacher ? props.teacher.enName : "",
      arName: props.teacher ? props.teacher.arName : "",
      grade: props.teacher ? props.teacher.grade : "",
      specialize: props.teacher ? props.teacher.specialize : "",
      email: props.teacher ? props.teacher.email : "",
      phone: props.teacher ? props.teacher.phone : "",
      username: props.teacher ? props.teacher.username : "",
      password: props.teacher ? props.teacher.password : "",
      hoppiesActivities: props.teacher ? props.teacher.hoppiesActivities : "",
      pic: props.teacher ? props.teacher.pic : "",
      btnLable: props.teacher ? "Edit Teacher Data" : "Add Teacher Data",
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
    const specialize = e.target.value;
    this.setState(() => ({
      specialize
    }));
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

  onSubmit = e => {
    e.preventDefault();
    var d = new Date();
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
        grade: this.state.grade,
        specialize: this.state.specialize,
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
          <span>Specialization : </span>
          <input
            name="specialize"
            type="text"
            className="form-control"
            placeholder="Specialization"
            value={this.state.specialize}
            onChange={this.specializeChange}
          />
        </div>
        <div className="form-group">
          <span>Grades: </span>
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
