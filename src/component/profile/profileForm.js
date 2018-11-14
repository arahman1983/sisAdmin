import React from "react";
import axios from "axios";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enName: props.data.enName ? props.data.enName : "",
      arName: props.data.arName ? props.data.arName : "",
      jobTitle: props.data.jobTitle ? props.data.jobTitle : "",
      email: props.data.email ? props.data.email : "",
      phone: props.data.phone ? props.data.phone : "",
      username: props.data.username ? props.data.username : "",
      password: props.data.password ? props.data.password : "",
      pic: props.data.pic ? props.data.pic : ""
    };
  }

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
  jobTitleChange = e => {
    const jobTitle = e.target.value;
    this.setState(() => ({
      jobTitle
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
  render() {
    console.log(this.state);
    return (
      <form>
        <div className="row my-3">
          <div className="col-md-8">
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
              <span>Job Title: </span>
              <input
                name="jobTitle"
                type="text"
                className="form-control"
                placeholder="Job Title"
                value={this.state.jobTitle}
                onChange={this.jobTitleChange}
              />
            </div>
            <hr />
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
            <hr />
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
            <hr />
            <button className="btn btn-primary">Edit Profile</button>
          </div>
          <div className="col-md-4 p-5">
            {this.state.pic ? (
              <div className="form-group uploadDiv text-center">
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
          </div>
        </div>
      </form>
    );
  }
}

export default ProfileForm;
